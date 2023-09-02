"use client";

import { useRef, useState} from "react";
import { Canvas } from "@react-three/fiber";
import CodeShape from "@/components/CodeShape";
import { useDrag } from '@use-gesture/react'

export default function CodeCanvas() {
  const groupRef = useRef();
  const [lastPosition, setLastPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const bind = useDrag((state) => {
    const { movement: [x, y], down } = state;

    if (down && !isDragging) {
      setIsDragging(true);
      setLastPosition({ x, y });
      return;
    }

    if (!down) {
      setIsDragging(false);
    }

    if (lastPosition && isDragging) {
      // Calculate the delta
      const deltaX = x - lastPosition.x;
      const deltaY = y - lastPosition.y;

      if (groupRef.current) {
        groupRef.current.rotation.x += deltaY * 0.01;
        groupRef.current.rotation.y += deltaX * 0.01;
      }

      // Update the last position
      setLastPosition({ x, y });
    }
  });


  return (
    
    <div {...bind()} className="h-screen">
      <Canvas>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />
        <group ref={groupRef} position={[0,0,-8]}>
        <CodeShape/>
        </group>
        {/* <OrbitControls/> */}
      </Canvas>
      </div>
  );
}
