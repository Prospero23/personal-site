"use client";

import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Vector3, type Group } from "three";

import { type Recording } from "@/data/recordings";
import Record from "./Record";

interface RecordCircleProps{
  records: Recording[]
  position: Vector3
}

// TODO: show nearest record name on bottom?
export default function RecordCircle({ records, position }: RecordCircleProps) {
  const [displayedRecords, setDisplayedRecords] = useState(records)

  const numPlanes = displayedRecords.length;
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
  if (!myGroup.current) {
    setDisplayedRecords(records);
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
            <Record position={new Vector3(x, y, z)} key={record.title} src={record.src} />
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
      <Html position={[0.5, -2.75, 0]} className="text-2xl lg:text-4xl" zIndexRange={[10000, 0]}>
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