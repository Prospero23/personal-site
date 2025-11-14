"use client"
import { useState } from "react";
import MusicCanvas from "@/components/music/MusicCanvas";
import { saxRecordings, laptopRecordings } from "../../data/recordings";
import SortingButtons from "@/components/music/SortingButtons";

const Music = () => {
    const [isLaptop, setIsLaptop] = useState(false);
  
  return (
    // touch-none?
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink touch-none">
      <MusicCanvas sax={saxRecordings} laptop={laptopRecordings} isLaptop={isLaptop}/>

      {/* Dom Overlay */}
      <SortingButtons isLaptop={isLaptop} setIsLaptop={setIsLaptop}/>
    </main>
  );
};

export default Music;

// add better loading stuff
