"use client";

import { useState, useMemo, type Dispatch, type SetStateAction } from "react";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Quaternion, Vector3 } from "three";

interface TextData {
  position: Vector3;
  quaternion: Quaternion;
  type: string;
}

interface BenProps {
  isContoured: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
}

export default function Ben({ isContoured, setIsHovered }: BenProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const obj = useLoader(OBJLoader, "/textModel/TextBen.obj");

  const textData = useMemo<TextData[]>(() => {
    // @ts-expect-error this geometry does exist here
    const modelGeometry = obj.children[0].geometry;
    const positions = modelGeometry.attributes.position.array;
    const normals = modelGeometry.attributes.normal.array;
    const existingArrays = new Set();
    const data: TextData[] = [];

    // calculate 3D positions for all text elements
    for (let i = 0; i < positions.length / 3; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];

      const nx = normals[i * 3];
      const ny = normals[i * 3 + 1];
      const nz = normals[i * 3 + 2];

      const position: Vector3 = new Vector3(x, y, z);
      const normal: Vector3 = new Vector3(nx, ny, nz).normalize();

      const quaternion = new Quaternion();
      const forward = new Vector3(0, 0, 1);
      quaternion.setFromUnitVectors(forward, normal);

      const key = position.toArray().toString();

      // check for duplicates
      if (existingArrays.has(key)) {
        continue;
      }

      existingArrays.add(key);

      // create text
      const options = ["Ben", "Eidson", "Code", "Music", "Ben", "Eidson"];
      const type = options[Math.floor(Math.random() * options.length)];

      data.push({ position, quaternion, type });
    }
    // TODO: AD-HOC check to get rid of extra points behind head?

    return data;
  }, [obj]);

  const handlePointerOver = (index: number) => {
    const hoveredText = textData[index];

    if (hoveredText.type === "Code" || hoveredText.type === "Music") {
      setIsHovered(true);
      setHoveredIndex(index);
    }
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    setHoveredIndex(null);
  };

  function handleMouseClick(index: number) {
    if (textData[index].type === "Music") {
      window.location.href = "/music";
    }

    if (textData[index].type === "Code") {
      window.location.href = "/code";
    }
  }

  return (
    <>
      {/* eslint-disable-next-line */}
      <group position={[0, -2, -4]} rotation={[0.4, 2.8, 0.0]}>
        {textData.map((text, i) => (
          <Text
            position={text.position}
            key={i}
            fontSize={0.05}
            quaternion={isContoured ? text.quaternion : new Quaternion()}
            color={
              i === hoveredIndex &&
              (text.type === "Music" || text.type === "Code")
                ? "red"
                : "black"
            }
            onPointerOut={() => {
              handlePointerOut();
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
