"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useCursor } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";
import dynamic from "next/dynamic";

import Ben from '@/components/Ben'

// <Text color={"purple"} position={[0,-5,-10]} rotation={[0, 0.0, 0.8]}>Coding</Text>
//

//////////////////////////

export default function CanvasComponent() {
  
  return (
    <Canvas>
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />

      <OrbitControls />
      <Ben/>
    </Canvas>
  );
}

//billboard always faces user
//check if is mobile and then do a different render? 