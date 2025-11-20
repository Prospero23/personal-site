"use client";
import { useState } from "react";
import CodeCanvas from "../../components/code/CodeCanvas";
import CodeOverlay from "../../components/code/CodeOverlay";
import codingData from "@/data/coding";
import { Selection } from "@/components/code/cube/GriddedCube";

export default function Code() {
  const [currentSelection, setCurrentSelection] = useState<Selection>({
    face: "front",
    square: null,
  });

  return (
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink">
      <CodeCanvas
        codingData={codingData}
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
      <CodeOverlay
        codingData={codingData}
        currentSelection={currentSelection}
      />
    </main>
  );
}

// front -> 0
// back -> 1
