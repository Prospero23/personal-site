import { type Mesh } from "three";
import { Face, type Selection } from "./GriddedCube";
import { CODING_CONFIG } from "@/data/coding";
import { type ThreeEvent } from "@react-three/fiber";
import gsap from "gsap";
import { Color } from "three";

import { type Dispatch, type SetStateAction, useRef, useEffect } from "react";
import { useTexture } from "@react-three/drei";

interface GridSquareProps {
  position: [number, number, number];
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
  size,
  face,
  index,
  currentSelection,
  setCurrentSelection,
}: GridSquareProps) {
  const faceConfig = CODING_CONFIG[face];
  const item = faceConfig?.squares[index] ?? null;
  const hasProject = item !== null;

  const square = useRef<Mesh>(null);
  const pointerDownInfo = useRef<MousePosition | null>(null);
  const isSelected =
    currentSelection.face === face && currentSelection.square === index;

  const baseGray = grayForSquare(face, index);

  const textureURL = hasProject ? item.imageURL : "fallback.png";
  const texture = useTexture(textureURL);

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
    if (currentSelection.face !== face || !hasProject) return;

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
      <meshStandardMaterial
        map={hasProject ? texture : undefined}
        color={!hasProject ? baseGray : "white"}
        emissive={isSelected && hasProject ? "white" : "black"}
        emissiveIntensity={isSelected && hasProject ? 0.1 : 0}
        transparent
        opacity={hasProject ? 1 : 0.35}
      />
    </mesh>
  );
}

// Deterministic "random" based on face + index (0–3)
export function grayForSquare(face: Face, index: number): Color {
  // Simple numeric seed from the face string + index
  const seed =
    face.charCodeAt(0) * 31 +
    face.charCodeAt(face.length - 1) * 17 +
    index * 101;

  // Deterministic pseudo-random in [0, 1]
  const normalized = (Math.sin(seed) + 1) / 2; // Math.sin is pure, no warnings

  // Clamp to a midrange gray so it's not too dark or too bright
  const gray = 0.3 + normalized * 0.4; // [0.3, 0.7]

  // Three.js Color in grayscale
  return new Color(gray, gray, gray);
}
