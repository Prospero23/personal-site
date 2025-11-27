"use client";

import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/utils/ExtendedOrbit";
import RecordCircle, {
  type RegisterRotateHandler,
} from "@/components/music/RecordCircle";
import { type Recording } from "@/data/recordings";
import { Vector3 } from "three";
import { type Instrument, type RecordingKind } from "./RecordingFilters";
import { Dispatch, SetStateAction, useMemo } from "react";
interface MusicCanvasProps {
  recordings: Recording[];
  currentRecordings: RecordingKind;
  currentInstrument: Instrument;
  onRegisterRotateHandler?: RegisterRotateHandler;
  setClosestRecording: Dispatch<SetStateAction<Recording | null>>;
}

export default function MusicCanvas({
  recordings,
  currentRecordings,
  currentInstrument,
  onRegisterRotateHandler,
  setClosestRecording,
}: MusicCanvasProps) {
  const focusPosition = new Vector3(0, 0, 0.75); // AD:HOC

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
  }, [recordings, currentInstrument, currentRecordings]);

  return (
    <>
      <Canvas className="cursor-grab active:cursor-grabbing z-0">
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />
        <RecordCircle
          records={filteredRecordings}
          position={focusPosition}
          onRegisterRotateHandler={onRegisterRotateHandler}
          setClosestRecording={setClosestRecording}
        />
        <ExtendedOrbit target={focusPosition} />
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
