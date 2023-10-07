/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import Ben from "@/components/homePage/Ben";
import { Suspense } from "react";

extend({ Loader });

export default function CanvasComponent() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <color attach="background" args={["pink"]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />
          <Ben />
          <OrbitControls />
        </Canvas>
      </Suspense>
      <Loader />
    </>
  );
}
