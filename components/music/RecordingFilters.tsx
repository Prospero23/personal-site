import {Dispatch, SetStateAction, ButtonHTMLAttributes, ReactNode } from "react";

interface RecordingFiltersProps{
    currentRecordings: RecordingFilter;
    setCurrentRecordings: Dispatch<SetStateAction<RecordingFilter>>;
    currentInstrument: InstrumentFilter;
    setCurrentInstrument: Dispatch<SetStateAction<InstrumentFilter>>;
}
export type RecordingFilter = "highlights" | "videos" | "audio";
export type InstrumentFilter = "sax" | "laptop"

export default function RecordingFilters({currentRecordings, setCurrentRecordings, currentInstrument, setCurrentInstrument}: RecordingFiltersProps){

    return(
    <div className="absolute right-10 top-16 md:right-20 md:top-32 z-10 flex flex-col gap-2 pointer-events-none shadow-lg">
    {/* Top row */}
    <div className="pointer-events-auto inline-flex items-center gap-1 px-2 py-1 text-xs sm:text-sm md:text-base">
        <FilterButton
        isActive={currentRecordings === "highlights"}
        activeClassName="text-green-500"
        onClick={() => setCurrentRecordings("highlights")}>
        Highlights
        </FilterButton>
        <FilterButton
        isActive={currentRecordings === "videos"}
        activeClassName="text-orange-500"
        onClick={() => setCurrentRecordings("videos")}>
        Videos
        </FilterButton>
        <FilterButton
        isActive={currentRecordings === "audio"}
        activeClassName="text-blue-500"
        onClick={() => setCurrentRecordings("audio")}>
        Audio
        </FilterButton>
    </div>

    {/* Bottom row */}
    <div className="pointer-events-auto inline-flex justify-around items-center text-xs sm:text-sm md:text-base">
        <FilterButton
        isActive={currentInstrument == "sax"}
        activeClassName="text-purple-600"
        onClick={() => setCurrentInstrument("sax")}
        >
        Sax
        </FilterButton>
        <FilterButton
        isActive={currentInstrument == "laptop"}
        activeClassName="text-red-600"
        onClick={() => setCurrentInstrument("laptop")}
        >
        Laptop
        </FilterButton>
    </div>
    </div>
    )
}

interface FilterButtonProps 
    extends ButtonHTMLAttributes<HTMLButtonElement>{
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
      className={`pointer-events-auto p-1 hover:underline ${
        isActive ? activeClassName : inactiveClassName
      }`}
      {...props}
    >
      {children}
    </button>
  );
}