"use client";

import { useRef, useEffect, type Dispatch, type SetStateAction } from "react";
import { Canvas } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import gsap from "gsap";
import Cube, { Selection } from "./cube/GriddedCube";
import { OrbitControls } from "@react-three/drei";

interface CodingCanvasProps {
  currentSelection: Selection;
  setCurrentSelection: Dispatch<SetStateAction<Selection>>;
}

const cameraPosition = [0, 0, 5]; // for static camera position

export default function CodeCanvas({
  currentSelection,
  setCurrentSelection,
}: CodingCanvasProps) {
  const groupRef = useRef<Group>(null);

  // handle key presses
  useEffect(() => {
    // TODO: round to nearest proper devision first
    const handleKeyDown = (event: any) => {
      if (groupRef.current != null) {
        switch (event.key) {
          case "ArrowUp":
            gsap.to(groupRef.current.rotation, {
              x: groupRef.current.rotation.x + Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;
          case "ArrowDown":
            gsap.to(groupRef.current.rotation, {
              x: groupRef.current.rotation.x - Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;
          case "ArrowLeft":
            gsap.to(groupRef.current.rotation, {
              y: groupRef.current.rotation.y + Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;
          case "ArrowRight":
            gsap.to(groupRef.current.rotation, {
              y: groupRef.current.rotation.y - Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;

          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: new Vector3(...cameraPosition), near: 0.5, far: 20 }}
      className="cursor-grab active:cursor-grabbing"
    >
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={1.5} color={"white"} />

      <Cube
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
        gridSquareSize={1}
        position={[0, 0.0, 0]}
        groupRef={groupRef}
      />
      <OrbitControls enableZoom={false} enablePan={false} target={[0, 0, 0]} />
    </Canvas>
  );
}
