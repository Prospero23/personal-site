/* eslint-disable react/no-unknown-property */
"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/ExtendedOrbit";
import RecordCircle from "@/components/music/RecordCircle";
import { Recording } from "@/data/recordings";
import { Vector3 } from "three";

interface MusicCanvasProps {
  sax: Recording[];
  laptop: Recording[];
  isLaptop: boolean;
}

export default function MusicCanvas({ sax, laptop, isLaptop }: MusicCanvasProps) {
  const focusPosition = new Vector3(0,0,1.5) // AD:HOC

  return (
    <>
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />

        {isLaptop ? (
          <A11y role="content" description="circle of my records on laptop">
            <RecordCircle records={laptop} offset={2.16} position={focusPosition}/>
          </A11y>
        ) : (
          <A11y role="content" description="circle of my records on saxophone">
            <RecordCircle records={sax} offset={1.55} position={focusPosition}/>
          </A11y>
        )}
        <ExtendedOrbit target={focusPosition}/>
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
