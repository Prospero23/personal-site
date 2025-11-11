"use client";
import { Canvas, extend } from "@react-three/fiber";
import { Loader, Html } from "@react-three/drei";
import Ben from "@/components/homePage/Ben";
import { Suspense } from "react";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/ExtendedOrbit";
extend({ Loader });

export default function CanvasComponent() {
  return (
    <>
        <Canvas tabIndex={0}>
          <color attach="background" args={["pink"]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />
          <A11y
            role="content"
            description="3d model of me (Ben) made of text that moves around"
          >
          <Suspense fallback={<Loading/>}>
            <Ben />
          </Suspense>
          </A11y>
          <ExtendedOrbit />
        </Canvas>
      <A11yAnnouncer />
      <Loader />
    </>
  );
}

function Loading(){
  return(
      <Html>
      <div style={{ color: "white" }}>Loading......</div>
    </Html>
  )
}