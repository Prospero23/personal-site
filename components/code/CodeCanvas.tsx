/* eslint-disable react/no-unknown-property */
"use client";

import { type Dispatch, type SetStateAction } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { type CodingData } from "@/data/coding";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

interface CodingCanvasProps {
  codingData: CodingData;
  closestFace: number;
  setClosestFace: Dispatch<SetStateAction<number>>;
}

const cameraPosition = [0, 0, 5]; // for static camera position

export default function CodeCanvas({
  codingData,
  setClosestFace,
}: CodingCanvasProps) {
  return (
    <Canvas
      camera={{ position: new Vector3(...cameraPosition) }}
      className="cursor-grab active:cursor-grabbing"
    >
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={1} color={"white"} />
      <Cube size={7} setClosestFace={setClosestFace} />
      <OrbitControls enableZoom={false} enablePan={false} target={[0, 1, -8]} />
    </Canvas>
  );
}
