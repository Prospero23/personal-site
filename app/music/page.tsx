"use client"
import { useState } from "react";
import MusicCanvas from "@/components/music/MusicCanvas";
import { saxRecordings, laptopRecordings } from "../../data/recordings";
import RecordingFilters, { InstrumentFilter, RecordingFilter } from "@/components/music/RecordingFilters";

const Music = () => {
    const [currentRecordings, setCurrentRecordings] = useState<RecordingFilter>("highlights");
    const [currentInstrument, setCurrentInstrument] = useState<InstrumentFilter>("sax");

  return (
    // touch-none?
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink touch-none">
      <MusicCanvas sax={saxRecordings} laptop={laptopRecordings} currentInstrument={currentInstrument}/>

      {/* Dom Overlay */}
      <RecordingFilters
      currentRecordings={currentRecordings}
      setCurrentRecordings={setCurrentRecordings}
      currentInstrument={currentInstrument}
      setCurrentInstrument={setCurrentInstrument} />
    </main>
  );
};

export default Music;

// add better loading stuff
