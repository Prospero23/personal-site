/* eslint-disable react/no-unknown-property */
"use client";

import { Canvas } from "@react-three/fiber";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/ExtendedOrbit";
import RecordCircle from "@/components/music/RecordCircle";
import { Recording } from "@/data/recordings";
import { Vector3 } from "three";
import { Instrument, RecordingKind } from "./RecordingFilters";
import { useMemo } from "react";
interface MusicCanvasProps {
  recordings: Recording[];
  currentRecordings: RecordingKind;
  currentInstrument: Instrument;
}

export default function MusicCanvas({ recordings, currentRecordings, currentInstrument }: MusicCanvasProps) {
  const focusPosition = new Vector3(0,0,0.75) // AD:HOC

  const filteredRecordings = useMemo(() => {
    // Always filter by instrument first
    const byInstrument = recordings.filter(
      (r) => r.instrument === currentInstrument,
    );

    switch (currentRecordings) {
      case "audio":
        return byInstrument.filter((r) => r.kind === "audio");

      case "video":
        return byInstrument.filter((r) => r.kind === "video");

      case "highlights":
        return byInstrument.filter((r) => r.isHighlight);

      default:
        return byInstrument;
    }
  } , [recordings, currentInstrument, currentRecordings]);

  return (
    <>
      <Canvas className="cursor-grab active:cursor-grabbing">
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />
        <RecordCircle records={filteredRecordings} position={focusPosition}/>
        <ExtendedOrbit target={focusPosition}/>
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
