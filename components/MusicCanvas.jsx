"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  Text,
  Billboard,
  useCursor,
  Html,
} from "@react-three/drei";
import RecordCircle from "@/components/RecordCircle";

export default function MusicCanvas({ albums }) {
  return (
    <Canvas>
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <RecordCircle records={albums} />
        
      </PresentationControls>
    </Canvas>
  );
}
