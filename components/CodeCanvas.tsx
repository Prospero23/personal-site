/* eslint-disable react/no-unknown-property */
"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CodeShape from "@/components/CodeShape";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import codingData from "@/data/coding";
import CodeModal from "@/components/CodeModal";

const cameraPosition = [0, 0, 5]; // for static camera position

interface LastPosition {
  x: number;
  y: number;
}
export default function CodeCanvas() {
  const groupRef = useRef<THREE.Group>(null);
  const [lastPosition, setLastPosition] = useState<LastPosition | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [closestFace, setClosestFace] = useState<number>(0);

  const cameraPositionVector = new THREE.Vector3(...cameraPosition);

  const bind = useDrag((state) => {
    state.event.preventDefault();
    state.event.stopPropagation();

    const {
      movement: [x, y],
      down,
    } = state;

    if (down && !isDragging) {
      setIsDragging(true);
      setLastPosition({ x, y });
      return;
    }

    if (!down) {
      setIsDragging(false);
    }

    if (lastPosition != null && isDragging) {
      // Calculate the delta
      const deltaX = x - lastPosition.x;
      const deltaY = y - lastPosition.y;

      if (groupRef.current != null) {
        groupRef.current.rotation.x += deltaY * 0.01;
        groupRef.current.rotation.y += deltaX * 0.01;

        const worldPosition = new THREE.Vector3();
        let minDistance = Infinity; // Initialize to a large value
        let closestChildIndex = -1; // Initialize to an invalid index

        groupRef.current.children.forEach((child, index) => {
          child.getWorldPosition(worldPosition);
          const distance = cameraPositionVector.distanceTo(worldPosition);

          if (distance < minDistance) {
            minDistance = distance;
            closestChildIndex = index;
          }
        });
        // closestFaceBABY
        setClosestFace(closestChildIndex);
      }

      // Update the last position
      setLastPosition({ x, y });
    }
  });

  return (
    <div {...bind()} className="touch-none h-[calc(100dvh)]">
      <Canvas camera={{ position: new THREE.Vector3(...cameraPosition) }}>
        <color attach="background" args={["pink"]} />
        <ambientLight intensity={1} color={"white"} />
        <group ref={groupRef} position={[0, 1, -8]}>
          <CodeShape />
        </group>
      </Canvas>
      <CodeModal side={codingData[closestFace]} />
      <div className="absolute bottom-14 z-20 text-white bg-none w-full text-center hidden md:block short-screen:hidden">
        <h1 className="uppercase text-2xl mb-2">
          {codingData[closestFace].title}
        </h1>
        {
          <p className="mx-32 text-sm lg:text-base">
            {codingData[closestFace].description}
          </p>
        }
        {codingData[closestFace].link != null ? (
          <a
            className="hover:underline"
            href={`${codingData[closestFace].link}`}
          >
            check it out here
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
