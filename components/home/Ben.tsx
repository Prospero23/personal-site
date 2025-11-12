"use client";

import { useState, useMemo } from "react";
import { Text, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Quaternion, Vector3 } from "three";

interface TextData {
  position: Vector3;
  quaternion: Quaternion;
  type: string;
  hovered: boolean;
}

interface BenProps{
  isContoured: boolean;
}

export default function Ben({isContoured}: BenProps) {
  // does this need to be in state?
  const [textData, setTextData] = useState<TextData[]>([]);
  const [hovered, setHovered] = useState<boolean>(false);
  useCursor(hovered);

  const obj = useLoader(OBJLoader, "/textModel/TextBen.obj");

  const handlePointerOver = (index: number) => {
    setTextData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index].hovered = true;
      updatedData[index].type === "Code" || updatedData[index].type === "Music"
        ? setHovered(true)
        : setHovered(false);
      return updatedData;
    });
  };

  const handlePointerOut = (index: number) => {
    setTextData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index].hovered = false;
      setHovered(false);
      return updatedData;
    });
  };

  function handleMouseClick(index: number) {
    if (textData[index].type === "Music") {
      window.location.href = "/music";
    }

    if (textData[index].type === "Code") {
      window.location.href = "/code";
    }
  }
// use normals to make text look betta
  useMemo(() => {
    const fetchData = () => {
      // @ts-expect-error this geometry does exist here
      const modelGeometry = obj.children[0].geometry;
      const positions = modelGeometry.attributes.position.array;
      const normals = modelGeometry.attributes.normal.array;
      const existingArrays = new Set();
      const textData: TextData[] = [];

      // calculate 3D positions for all text elements
      for (let i = 0; i < positions.length / 3; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];

        const nx = normals[i * 3];
        const ny = normals[i * 3 + 1];
        const nz = normals[i * 3 + 2];

        const position: Vector3 = new Vector3(x, y, z);
        const normal: Vector3 = new Vector3(nx, ny, nz);

        const normalVector = normal.normalize();

        const quaternion = new Quaternion();
        const forward = new Vector3(0, 0, 1);
        quaternion.setFromUnitVectors(forward, normalVector);

       let testArray = position.toArray().toString()

        // check for duplicates
        if (existingArrays.has(testArray)){
          continue;
        }

        existingArrays.add(testArray);

        // create text
        const options = ["Ben", "Eidson", "Code", "Music", "Ben", "Eidson"];
        const randomNum = Math.floor(Math.random() * options.length);
        const type = options[randomNum];
        textData.push({ position, quaternion, type, hovered: false });    
      }
      // TODO: AD-HOC check to get rid of extra points behind head?

      setTextData(textData);
    };

    fetchData();
  }, [obj.children]);

  return (
    <>
      <group position={[0, -2, -4]} rotation={[0.4, 2.8, 0.0]}>
        {textData.map((text, i) => (
          <Text
            position={text.position}
            key={i}
            fontSize={0.05}
            quaternion={isContoured ? text.quaternion : undefined}
            color={
              text.hovered && (text.type === "Music" || text.type === "Code")
                ? "red"
                : "black"
            }
            onPointerOut={() => {
              handlePointerOut(i);
            }}
            onPointerOver={() => {
              handlePointerOver(i);
            }}
            onClick={() => {
              handleMouseClick(i);
            }}
          >
            {text.type}
          </Text>
        ))}
      </group>
    </>
  );
}

// TODO: preload? I want faster loading.