"use client";

import { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Billboard, useCursor } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";

// <Text color={"purple"} position={[0,-5,-10]} rotation={[0, 0.0, 0.8]}>Coding</Text>
//

//////////////////////////

export default function CanvasComponent() {
  const [textData, setTextData] = useState([]);
  const [hovered, setHovered] = useState([]);
  useCursor(hovered); //controls cursor

  const obj = useLoader(OBJLoader, "textModel/TextBen.obj");

  useEffect(() => {
    const fetchData = () => {
      const modelGeometry = obj.children[0].geometry;
      const positions = modelGeometry.attributes.position.array;
      const existingArrays = new Set();
      const textPos = [];

      for (let i = 0; i < positions.length; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];

        const newArray = [x, y, z];

        if (!existingArrays.has(newArray.toString())) {
          //get rid of duplicates
          existingArrays.add(newArray.toString()); //add to set
          const options = ["Ben", "Eidson", "Code", "Music", "Ben", "Eidson"];
          const randomNum = Math.floor(Math.random() * options.length);
          const type = options[randomNum];
          textPos.push({ position: newArray, type: type, hovered: false }); //add to array
        }

        if (i > positions.length / 3 - 1) {
          break;
        }
      }
      setTextData(textPos);
    };

    fetchData();
  }, []);

  const handlePointerOver = (index) => {
    setTextData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index].hovered = true;
      updatedData[index].type === "Code" || updatedData[index].type === "Music"
        ? setHovered(true)
        : setHovered(false);
      return updatedData;
    });
  };

  const handlePointerOut = (index) => {
    setTextData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index].hovered = false;
      setHovered(false);
      return updatedData;
    });
  };

  function handleMouseClick(index) {
    if (textData[index].type === "Music") {
      window.location.href = "/music";
    }

    if (textData[index].type === "Code") {
      window.location.href = "/code";
    }
  }

  return (
    <Canvas>
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />

      <OrbitControls />
      {textData.map((text, i) => (
        <Text
          position={text.position}
          key={i}
          fontSize={0.05}
          color={
            text.hovered && (text.type === "Music" || text.type === "Code")
              ? "red"
              : "black"
          }
          onPointerOut={() => handlePointerOut(i)}
          onPointerOver={() => handlePointerOver(i)}
          onClick={() => handleMouseClick(i)}
        >
          {text.type}
        </Text>
      ))}
    </Canvas>
  );
}

//billboard always faces user
