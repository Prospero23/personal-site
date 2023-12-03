/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import Ben from "@/components/homePage/Ben";
import { Suspense } from "react";
import { A11y, A11yAnnouncer } from "@react-three/a11y";

extend({ Loader });

export default function CanvasComponent() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <color attach="background" args={["pink"]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />
          <A11y
            role="content"
            description="3d model of me (Ben) made of text that moves around"
          >
            <Ben />
          </A11y>
          <OrbitControls />
        </Canvas>
      </Suspense>
      <A11yAnnouncer />
      <Loader />
    </>
  );
}
