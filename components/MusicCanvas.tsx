/* eslint-disable react/no-unknown-property */
"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import RecordCircle from "@/components/RecordCircle";
import { OrbitControls } from "@react-three/drei";

interface Record {
  title: string;
  src: string;
}

interface MusicCanvasProps {
  sax: Record[];
  laptop: Record[];
}

export default function MusicCanvas({ sax, laptop }: MusicCanvasProps) {
  const [isLaptop, setIsLaptop] = useState(false);

  const handleClickLaptop = () => {
    setIsLaptop(true);
  };
  const handleClickSax = () => {
    setIsLaptop(false);
  };

  return (
    <>
      <div className="absolute flex justify-center flex-col z-10 right-0 top-14  sm:right-16 sm:top-14 text-2xl sm:text-2xl lg:text-4xl xl:text-6xl p-4 lg:p-8">
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
          <RecordCircle records={laptop} />
        ) : (
          <RecordCircle records={sax} />
        )}
        <OrbitControls />
      </Canvas>
    </>
  );
}
