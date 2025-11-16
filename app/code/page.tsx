"use client";
import { useState } from "react";
import CodeCanvas from "../../components/code/CodeCanvas";
import CodeOverlay from "../../components/code/CodeOverlay";
import codingData from "@/data/coding";

export default function Code() {
  const [closestFace, setClosestFace] = useState(0);
  return (
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink">
      <CodeCanvas
        codingData={codingData}
        closestFace={closestFace}
        setClosestFace={setClosestFace}
      />
      {/* <CodeOverlay codingData={codingData} closestFace={closestFace} /> */}
    </main>
  );
}
