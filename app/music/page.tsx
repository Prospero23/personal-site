import MusicCanvas from "@/components/music/MusicCanvas";
import { saxRecordings, laptopRecordings } from "../../data/recordings";

const Music = () => {
  return (
    <main className="flex items-center justify-center bg-customPink w-screen h-[calc(100dvh)] touch-none">
      <MusicCanvas sax={saxRecordings} laptop={laptopRecordings} />
    </main>
  );
};

export default Music;

// add better loading stuff
