"use client";

import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Vector3, type Group } from "three";

import { type Recording } from "@/data/recordings";
import Record from "./Record";

interface RecordCircleProps{
  records: Recording[]
  offset: number
  position: Vector3
}

export default function RecordCircle({ records, offset, position }: RecordCircleProps) {
  const numPlanes = records.length;
  const radius = 2;

  const myGroup = useRef<Group>(null);

  const handleClick = (direction: string) => {
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
  };

  useEffect(() => {
    if (myGroup.current != null){
      // TODO: reset current rotation to zero
    }
  }, [records])

  return (
    <>
      <group ref={myGroup} position={position} rotation={[0, 0, 0]}>
        {records.map((record, i) => {
          // Adjust the starting angle so that one album starts in the center facing the camera.
          const angleOffset = Math.PI + offset;
          const angle = angleOffset + (i / numPlanes) * Math.PI * 2;

          const x = Math.cos(angle) * radius;
          const y = 0.0;
          const z = Math.sin(angle) * radius + 0;

          return (
            <Record position={new Vector3(x, y, z)} key={i} src={record.src} />
          );
        })}
      </group>
      {/* TODO: Change to Text? */}
      <Html position={[-1, -2.75, 0]} className="text-2xl lg:text-4xl" zIndexRange={[10000, 0]}>
        <button
          className="hover:underline text-white"
          onClick={() => {
            handleClick("backward");
          }}
        >
          PREV
        </button>
      </Html>
      <Html position={[1, -2.75, 0]} className="text-2xl lg:text-4xl" zIndexRange={[10000, 0]}>
        <button
          className="hover:underline text-white"
          onClick={() => {
            handleClick("forward");
          }}
        >
          NEXT
        </button>
      </Html>
    </>
  );
}