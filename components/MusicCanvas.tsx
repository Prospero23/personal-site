/* eslint-disable react/no-unknown-property */
"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/ExtendedOrbit";
import RecordCircle from "@/components/RecordCircle";
import { Recording } from "@/data/recordings";

interface MusicCanvasProps {
  sax: Recording[];
  laptop: Recording[];
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
          <A11y role="content" description="circle of my records on laptop">
            <RecordCircle records={laptop} />
          </A11y>
        ) : (
          <A11y role="content" description="circle of my records on saxophone">
            <RecordCircle records={sax} />
          </A11y>
        )}
        <ExtendedOrbit />
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
