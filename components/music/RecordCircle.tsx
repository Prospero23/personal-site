"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { Vector3, type Group } from "three";

import { type Recording } from "@/data/recordings";
import Record from "./Record";
import { useFrame, useThree } from "@react-three/fiber";

export type RotateFn = (direction: "forward" | "backward") => void;
export type RegisterRotateHandler = (fn: RotateFn) => void;

interface RecordCircleProps {
  records: Recording[];
  position: Vector3;
  onRegisterRotateHandler?: RegisterRotateHandler;
  setClosestRecording: Dispatch<SetStateAction<Recording | null>>;
}

// TODO: show nearest record name on bottom?
export default function RecordCircle({
  records,
  position,
  onRegisterRotateHandler,
  setClosestRecording,
}: RecordCircleProps) {
  const [displayedRecords, setDisplayedRecords] = useState(records);

  const myGroup = useRef<Group>(null);
  const lastClosestRef = useRef<number | null>(null);
  const worldPosition = useRef(new Vector3()).current;
  const { camera } = useThree();

  const numPlanes = displayedRecords.length;
  const radius = 2;

  function getClosestRecording() {
    let minDistance = Infinity;
    let closestChildIndex = -1;

    if (myGroup.current != null) {
      myGroup.current.children.forEach((child, index) => {
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

        setClosestRecording(displayedRecords[closestChildIndex]);
      }
    }
  }

  useFrame(() => {
    getClosestRecording();
  });

  const rotateGroup: RotateFn = useCallback(
    (direction: "forward" | "backward") => {
      if (myGroup.current != null) {
        // Calculate the absolute target rotation value for each plane.
        const currentPlane = Math.round(
          myGroup.current.rotation.y / ((Math.PI * 2) / numPlanes),
        );
        const targetPlane =
          direction === "backward" ? currentPlane + 1 : currentPlane - 1;
        const targetRotation = (targetPlane * (Math.PI * 2)) / numPlanes;

        gsap.to(myGroup.current.rotation, {
          y: targetRotation,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    },
    [numPlanes],
  );
  // animation stuff
  useEffect(() => {
    if (myGroup.current == null) {
      //TODO fix
      setTimeout(() => setDisplayedRecords(records), 0);
      return;
    }

    const group = myGroup.current;

    gsap.to(group.scale, {
      x: 0.2,
      y: 0.2,
      z: 0.2,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setDisplayedRecords(records);

        group.rotation.y = 0;

        gsap.to(group.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      },
    });
  }, [records]);

  // rotation stuff
  useEffect(() => {
    if (onRegisterRotateHandler === undefined) return;
    onRegisterRotateHandler(rotateGroup);
  }, [onRegisterRotateHandler, numPlanes, rotateGroup]);

  // arrow keys to be able to rotate
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "a") {
        rotateGroup("backward");
      }
      if (event.key === "ArrowRight" || event.key === "d") {
        rotateGroup("forward");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [rotateGroup]);

  useEffect(() => {
    // indices now refer to a new list
    lastClosestRef.current = null;

    if (displayedRecords.length === 0) {
      setClosestRecording(null);
    } else {
      // assume index 0 is front after reset
      setClosestRecording(displayedRecords[0]);
    }
  }, [displayedRecords, setClosestRecording]);

  return (
    <>
      <group ref={myGroup} position={position} rotation={[0, 0, 0]}>
        {displayedRecords.map((record, i) => {
          // UNIT CIRCLE STUFF
          // places index 0 at front by applying 90 degree offset
          const angleOffset = Math.PI / 2;
          // radius = 1 unit -> circum = 2pi
          const angle = angleOffset + (i / numPlanes) * Math.PI * 2;

          const x = Math.cos(angle) * radius;
          const y = 0.0;
          const z = Math.sin(angle) * radius;

          return (
            <Record
              position={new Vector3(x, y, z)}
              key={record.title}
              recording={record}
            />
          );
        })}
      </group>
    </>
  );
}
