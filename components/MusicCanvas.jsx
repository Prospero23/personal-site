"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import RecordCircle from "@/components/RecordCircle";
import { OrbitControls } from "@react-three/drei";


export default function MusicCanvas({ sax, laptop }) {
  const [isLaptop, setIsLaptop] = useState(true);

  const handleClickLaptop = () => {
    setIsLaptop(true);
  };
  const handleClickSax = () => {
    setIsLaptop(false);
  };

  return (
    <>
      <div className="absolute flex justify-center flex-col z-10 right-4 bottom-4 sm:right-16 sm:bottom-14 text-2xl sm:text-4xl lg:text-6xl xl:text-8xl rounded-lg p-4 lg:p-8 bg-green-400">
        <button
          className={`z-10 block ${
            !isLaptop ? "underline text-purple-600" : "text-white"
          } hover:text-purple-600`}
          onClick={handleClickSax}
        >
          Sax
        </button>
        <button
          className={`z-10 block ${
            isLaptop ? "underline text-red-600" : "text-white"
          } hover:text-red-600`}
          onClick={handleClickLaptop}
        >
          Laptop
        </button>
      </div>
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />

        {isLaptop ? (
          <RecordCircle records={laptop}/>
        ) : (
          <RecordCircle records={sax}/>
        )}
        <OrbitControls/>
      </Canvas>
    </>
  );
}
