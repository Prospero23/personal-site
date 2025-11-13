"use client";
import { Canvas, extend } from "@react-three/fiber";
import { Loader, Html } from "@react-three/drei";
import Ben from "@/components/home/Ben";
import { Dispatch, SetStateAction, Suspense } from "react";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import ExtendedOrbit from "@/components/ExtendedOrbit";
extend({ Loader });

interface HomeCanvasProps{
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isContoured: boolean;
}

export default function HomeCanvas({setIsHovered, isContoured}: HomeCanvasProps) {
  return (
    <>
      <Canvas tabIndex={0}>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />
        <Suspense fallback={<Loading/>}>
          <Ben isContoured={isContoured} setIsHovered={setIsHovered}/>
        </Suspense>
        <ExtendedOrbit autoRotate={true} autoRotateSpeed={0.5}/>
        </Canvas>
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