"use client";
import { useRef, useState } from "react";
import MusicCanvas from "@/components/music/MusicCanvas";
import { Recording, recordings } from "../../data/recordings";
import RecordingFilters, {
  type RecordingKind,
  type Instrument,
} from "@/components/music/RecordingFilters";
import { type RotateFn } from "@/components/music/RecordCircle";

const Music = () => {
  const [currentRecordings, setCurrentRecordings] =
    useState<RecordingKind>("highlights");
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>("sax");
  const [closestRecording, setClosestRecording] = useState<Recording | null>(
    null,
  );

  const rotateRef = useRef<RotateFn | null>(null);

  return (
    // touch-none?
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink">
      <MusicCanvas
        recordings={recordings}
        currentRecordings={currentRecordings}
        currentInstrument={currentInstrument}
        onRegisterRotateHandler={(fn) => (rotateRef.current = fn)}
        setClosestRecording={setClosestRecording}
      />

      {/* Dom Overlay */}
      <div className="w-full h-full absolute top-0 pointer-events-none flex flex-col justify-end z-10">
        <RecordingFilters
          currentRecordings={currentRecordings}
          setCurrentRecordings={setCurrentRecordings}
          currentInstrument={currentInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />

        <div className="flex justify-center gap-28 pb-8 text-white text-lg">
          <button
            className="hover:underline hover:cursor-pointer active:text-pink-400 p-6 pointer-events-auto"
            onClick={() => rotateRef.current?.("backward")}
          >
            prev
          </button>
          <button
            className="hover:underline hover:cursor-pointer active:text-pink-400 p-6 pointer-events-auto"
            onClick={() => rotateRef.current?.("forward")}
          >
            next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Music;

// add better loading stuff
