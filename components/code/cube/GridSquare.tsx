import { type Mesh } from "three";
import { Face, type Selection } from "./GriddedCube";
import { type ThreeEvent } from "@react-three/fiber";
import gsap from "gsap";

import { type Dispatch, type SetStateAction, useRef, useEffect } from "react";

interface GridSquareProps {
  position: [number, number, number];
  color: string;
  size: number;
  face: Face;
  index: number;
  currentSelection: Selection;
  setCurrentSelection: Dispatch<SetStateAction<Selection>>;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function GridSquare({
  position,
  color,
  size,
  face,
  index,
  currentSelection,
  setCurrentSelection,
}: GridSquareProps) {
  const square = useRef<Mesh>(null);
  const pointerDownInfo = useRef<MousePosition | null>(null);
  const isSelected =
    currentSelection.face === face && currentSelection.square === index;

  useEffect(() => {
    if (!square.current) return;

    const forwardAmount = size * 0.3;
    const targetZ = isSelected ? position[2] + forwardAmount : position[2];

    gsap.to(square.current.position, {
      z: targetZ,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [isSelected, position, size]);

  function handlePointerDown(e: ThreeEvent<PointerEvent>) {
    // only allow selections if on nearest face.
    if (currentSelection.face !== face) return;

    pointerDownInfo.current = { x: e.clientX, y: e.clientY };
  }
  function handlePointerUp(e: ThreeEvent<PointerEvent>) {
    if (currentSelection.face !== face) return;

    const start = pointerDownInfo.current;
    pointerDownInfo.current = null;

    if (!start) return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    const distanceSq = dx * dx + dy * dy;
    const distanceThreshold = 5; // pixels

    if (distanceSq > distanceThreshold * distanceThreshold) {
      // treat as drag
      return;
    }

    setCurrentSelection(
      isSelected ? { face: face, square: null } : { face: face, square: index },
    );
    e.stopPropagation();
  }

  return (
    <mesh
      ref={square}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <boxGeometry args={[size, size, size * 0.1]} />
      <meshStandardMaterial color={isSelected ? "white" : color} />
    </mesh>
  );
}
