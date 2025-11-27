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
    <div className="pointer-events-none absolute inset-x-0 top-20 md:top-24 z-10 flex justify-center text-ghost-white">
      <div className="flex flex-col shadow-lg">
        {/* Top row */}
        <div className="pointer-events-auto inline-flex items-center gap-1 px-2 py-1 text-sm sm:text-base md:text-lg">
          <FilterButton
            isActive={currentRecordings === "highlights"}
            activeClassName="text-green-500"
            onClick={() => {
              setCurrentRecordings("highlights");
            }}
          >
            Highlights
          </FilterButton>
          <FilterButton
            isActive={currentRecordings === "audio"}
            activeClassName="text-orange-500"
            onClick={() => {
              setCurrentRecordings("audio");
            }}
          >
            Audio
          </FilterButton>
          <FilterButton
            isActive={currentRecordings === "video"}
            activeClassName="text-blue-500"
            onClick={() => {
              setCurrentRecordings("video");
            }}
          >
            Videos
          </FilterButton>
        </div>
        {/* Bottom row */}
        <div className="pointer-events-auto inline-flex justify-around items-center text-sm sm:text-base md:text-lg">
          <FilterButton
            isActive={currentInstrument === "sax"}
            activeClassName="text-purple-600"
            onClick={() => {
              setCurrentInstrument("sax");
            }}
          >
            Sax
          </FilterButton>
          <FilterButton
            isActive={currentInstrument === "laptop"}
            activeClassName="text-red-600"
            onClick={() => {
              setCurrentInstrument("laptop");
            }}
          >
            Laptop
          </FilterButton>
        </div>
      </div>
    </div>
  );
}

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  activeClassName?: string;
  inactiveClassName?: string;
  children: ReactNode;
}

function FilterButton({
  isActive,
  activeClassName = "",
  inactiveClassName = "",
  children,
  ...props
}: FilterButtonProps) {
  return (
    <button
      className={`pointer-events-auto p-1 hover:underline hover:cursor-pointer ${
        isActive ? `${activeClassName} underline` : inactiveClassName
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
