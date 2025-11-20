"use client";
import { useFrame, useThree } from "@react-three/fiber";
import {
  type Dispatch,
  type SetStateAction,
  useRef,
  useState,
  RefObject,
  useEffect,
} from "react";
import { type Group, Object3DEventMap, Vector3 } from "three";

import CubeSide from "./CubeSide";

// NOTE: order of indexes
export type Face = "front" | "back" | "right" | "left" | "top" | "bottom";
const SIDE_LABELS: Face[] = ["front", "back", "right", "left", "top", "bottom"];

export interface Selection {
  face: Face;
  square: number | null;
}

interface GriddedCubeProps {
  gridSquareSize: number;
  position: [number, number, number];
  currentSelection: Selection;
  setCurrentSelection: Dispatch<SetStateAction<Selection>>;
  groupRef: RefObject<Group<Object3DEventMap> | null>;
}

export type SquareID = string | null;

export default function GriddedCube({
  gridSquareSize,
  position,
  currentSelection,
  setCurrentSelection,
  groupRef,
}: GriddedCubeProps) {
  const cubeSize = gridSquareSize * 2;

  const lastClosestRef = useRef<number | null>(null);
  const worldPosition = useRef(new Vector3()).current;
  const { camera } = useThree();

  function getClosestFace() {
    let minDistance = Infinity; // Initialize to a large value
    let closestChildIndex = -1; // Initialize to an invalid index
    if (groupRef.current != null) {
      groupRef.current.children.forEach((child, index) => {
        child.getWorldPosition(worldPosition);
        const distance = camera.position.distanceTo(worldPosition);

        if (distance < minDistance) {
          minDistance = distance;
          closestChildIndex = index;
        }
      });

      if (
        closestChildIndex !== -1 &&
        closestChildIndex !== lastClosestRef.current
      ) {
        lastClosestRef.current = closestChildIndex;
        const closestLabelName = SIDE_LABELS[closestChildIndex];
        setCurrentSelection({ face: closestLabelName, square: null });
      }
    }
  }

  // gives closest face every frame
  useFrame(() => {
    getClosestFace();
  });

  return (
    <group position={position} ref={groupRef} rotation={[0.0, 0.25, 0]}>
      {/* Front (+Z) */}
      <CubeSide
        rotation={[0, 0, 0]}
        position={[0, 0, cubeSize / 2]}
        gridSquareSize={gridSquareSize}
        face="front"
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />

      {/* Back (-Z) */}
      <CubeSide
        rotation={[0, Math.PI, 0]}
        position={[0, 0, -cubeSize / 2]}
        gridSquareSize={gridSquareSize}
        face="back"
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />

      {/* Right (+X) */}
      <CubeSide
        rotation={[0, Math.PI / 2, 0]}
        position={[cubeSize / 2, 0, 0]}
        gridSquareSize={gridSquareSize}
        face="right"
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />

      {/* Left (-X) */}
      <CubeSide
        rotation={[0, -Math.PI / 2, 0]}
        position={[-cubeSize / 2, 0, 0]}
        gridSquareSize={gridSquareSize}
        face="left"
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />

      {/* Top (+Y) */}
      <CubeSide
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, cubeSize / 2, 0]}
        gridSquareSize={gridSquareSize}
        face="top"
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />

      {/* Bottom (-Y) */}
      <CubeSide
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -cubeSize / 2, 0]}
        gridSquareSize={gridSquareSize}
        face="bottom"
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
    </group>
  );
}
