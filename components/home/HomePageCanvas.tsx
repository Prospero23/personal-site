"use client";
import { Canvas, extend } from "@react-three/fiber";
import { Loader, Html } from "@react-three/drei";
import Ben from "@/components/home/Ben";
import { type Dispatch, type SetStateAction, Suspense } from "react";
import ExtendedOrbit from "@/components/ExtendedOrbit";

interface HomeCanvasProps {
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isContoured: boolean;
}

export default function HomeCanvas({
  setIsHovered,
  isContoured,
}: HomeCanvasProps) {
  return (
    <>
      <Canvas tabIndex={0}>
        {/* eslint-disable-next-line */}
        <color attach="background" args={["pink"]} />
        {/* eslint-disable-next-line */}
        <ambientLight intensity={0.5} />
        {/* eslint-disable-next-line */}
        <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />
        <Suspense fallback={<Loading />}>
          <Ben isContoured={isContoured} setIsHovered={setIsHovered} />
        </Suspense>
        <ExtendedOrbit autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
      <Loader />
    </>
  );
}

function Loading() {
  return (
    <Html>
      <div style={{ color: "white" }}>Loading......</div>
    </Html>
  );
}
