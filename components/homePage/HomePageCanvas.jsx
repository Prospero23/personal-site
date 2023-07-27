"use client";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import Ben from "@/components/homePage/Ben";
import ControlWrapper from '@/components/homePage/ControlWrapper'
import LoadingScreen from '@/components/LoadingScreen'
import { Suspense } from "react";

extend({Loader})

export default function CanvasComponent() {
  return (
    <>
    <Suspense fallback={null}>
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />

        <ControlWrapper />
          <Ben />
      </Canvas>
      </Suspense>
      <Loader/>
    </>
  );
}

//check if is mobile and then do a different render?
