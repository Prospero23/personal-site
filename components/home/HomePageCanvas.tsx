"use client";
import { Canvas } from "@react-three/fiber";
import Ben from "@/components/home/Ben";
import { type Dispatch, type SetStateAction, Suspense } from "react";
import ExtendedOrbit from "@/components/utils/ExtendedOrbit";
import LoadingScreen from "../utils/LoadingScreen";
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
      <Canvas tabIndex={0} resize={{ debounce: 200 }}>
        <color attach="background" args={["pink"]} />
        <Suspense fallback={<LoadingScreen />}>
          <Ben isContoured={isContoured} setIsHovered={setIsHovered} />
        </Suspense>
        <ExtendedOrbit autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
    </>
  );
}
