"use client";

import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, useCursor } from "@react-three/drei";
import RecordCircle from "@/components/RecordCircle";

export default function MusicCanvas({ sax, laptop }) {
  const [isLaptop, setIsLaptop] = useState(false);

  const handleClickLaptop = () => {
    setIsLaptop(true);
  };
  const handleClickSax = () => {
    setIsLaptop(false);
  };

  return (
    <>
      <div className="absolute z-10 right-16 bottom-10 text-4xl border border-solid rounded-lg p-4 bg-green-400">
        <button
          className={`z-10 block ${!isLaptop ? "underline text-purple-600" : "text-white"} hover:text-purple-600`}
          onClick={handleClickSax}
        >
          Sax
        </button>
        <button
          className={`z-10 block ${isLaptop ? "underline text-red-600" : "text-white"} hover:text-red-600`}
          onClick={handleClickLaptop}
        >
          Laptop
        </button>
      </div>
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />
        {isLaptop ? (
          <RecordCircle records={laptop} />
        ) : (
          <RecordCircle records={sax} />
        )}
      </Canvas>
    </>
  );
}
