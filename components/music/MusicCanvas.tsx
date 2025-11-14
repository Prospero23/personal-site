/* eslint-disable react/no-unknown-property */
"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/ExtendedOrbit";
import RecordCircle from "@/components/music/RecordCircle";
import { Recording } from "@/data/recordings";
import { Vector3 } from "three";
import { InstrumentFilter } from "./RecordingFilters";

interface MusicCanvasProps {
  sax: Recording[];
  laptop: Recording[];
  currentInstrument: InstrumentFilter;
}

export default function MusicCanvas({ sax, laptop, currentInstrument }: MusicCanvasProps) {
  const focusPosition = new Vector3(0,0,1.5) // AD:HOC

  return (
    <>
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />

        {currentInstrument == "laptop" ? (
          <A11y role="content" description="circle of my records on laptop">
            <RecordCircle records={laptop} position={focusPosition}/>
          </A11y>
        ) : (
          <A11y role="content" description="circle of my records on saxophone">
            <RecordCircle records={sax} position={focusPosition}/>
          </A11y>
        )}
        <ExtendedOrbit target={focusPosition}/>
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
