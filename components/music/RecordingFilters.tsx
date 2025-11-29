import {
  type Dispatch,
  type SetStateAction,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

interface RecordingKindsProps {
  currentRecordings: RecordingKind;
  setCurrentRecordings: Dispatch<SetStateAction<RecordingKind>>;
  currentInstrument: Instrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
}
export type RecordingKind = "audio" | "video" | "highlights";
export type Instrument = "sax" | "laptop";

export default function RecordingFilters({
  currentRecordings,
  setCurrentRecordings,
  currentInstrument,
  setCurrentInstrument,
}: RecordingKindsProps) {
  return (
    <div className={`absolute inset-x-0 top-20 md:top-24 z-10`}>
      <div className="mx-auto w-full lg:max-w-7xl flex justify-center short-screen:justify-start">
        <div className="backdrop-blur-md bg-black/30 rounded-full px-4 py-2 flex flex-col gap-1 shadow-md pointer-events-auto">
          {/* Category */}
          <div className="flex gap-2 justify-center">
            <FilterButton
              label="Highlights"
              active={currentRecordings === "highlights"}
              onClick={() => setCurrentRecordings("highlights")}
            />
            <FilterButton
              label="Audio"
              active={currentRecordings === "audio"}
              onClick={() => setCurrentRecordings("audio")}
            />
            <FilterButton
              label="Videos"
              active={currentRecordings === "video"}
              onClick={() => setCurrentRecordings("video")}
            />
          </div>

          {/* Instrument */}
          <div className="flex gap-2 justify-center">
            <FilterButton
              label="Sax"
              active={currentInstrument === "sax"}
              onClick={() => setCurrentInstrument("sax")}
            />
            <FilterButton
              label="Laptop"
              active={currentInstrument === "laptop"}
              onClick={() => setCurrentInstrument("laptop")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 text-sm md:text-base rounded-full
        transition-all duration-150 cursor-pointer
        ${
          active
            ? "bg-pink-400 text-black font-semibold"
            : "text-white/80 hover:text-white hover:underline"
        }
      `}
    >
      {label}
    </button>
  );
}
