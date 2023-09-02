"use client";

import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CodeShape from "@/components/CodeShape";
import { useDrag } from "react-use-gesture";

export default function CodeCanvas() {
  
  return (
    <>
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />
        <CodeShape />
        <OrbitControls/>
      </Canvas>
    </>
  );
}
