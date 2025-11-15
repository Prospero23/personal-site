"use client"
import { useState } from "react";
import MusicCanvas from "@/components/music/MusicCanvas";
import { recordings } from "../../data/recordings";
import RecordingFilters, {RecordingKind, Instrument} from "@/components/music/RecordingFilters";

const Music = () => {
    const [currentRecordings, setCurrentRecordings] = useState<RecordingKind>("highlights");
    const [currentInstrument, setCurrentInstrument] = useState<Instrument>("sax");

  return (
    // touch-none?
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink touch-none">
      <MusicCanvas recordings={recordings} currentRecordings={currentRecordings} currentInstrument={currentInstrument}/>

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
