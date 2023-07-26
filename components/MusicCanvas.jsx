"use client";


import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  Text,
  useCursor,
} from "@react-three/drei";
import RecordCircle from "@/components/RecordCircle";

export default function MusicCanvas({ sax, laptop }) {
   const [isLaptop, setIsLaptop]  = useState(false)

   const handleClick = () =>{
    setIsLaptop(!isLaptop)
   }

  return (
    <>
    <button className="z-10" onClick={handleClick}>test</button>
    <Canvas>
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        {isLaptop ? <RecordCircle records={laptop}/> : <RecordCircle records={sax}/>}
        
      </PresentationControls>

    </Canvas>
    </>
  );
}
