"use client";

import { Html, Text, Billboard } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

function Record({ position, key, src }) {
  const myMesh = useRef();
  const {camera} = useThree()

  let angle = 0.3;

   useFrame(({ clock }) => {
     myMesh.current.lookAt(camera.position);

   });

  return (
    <Billboard position={position} ref={myMesh} key={key} follow>
      <Html className="" transform distanceFactor={1.16}>
        <iframe src={src} seamless height={360} width={360}></iframe>
      </Html>
    </Billboard>
  );
}

export default function RecordCircle({ records }) {
  const numPlanes = records.length;
  const radius = 2; 
  const offset = -0.3 //maybe make offset a prop

  const [goalRotation, setGoalRotation] = useState(offset);
  const [startingTime, setStartingTime] = useState(0);
  //maybe add back isRotating state

  const myGroup = useRef();
  const { clock } = useThree();

  const handleClick = () => {
    // Start the rotation if not already rotating

    setStartingTime(clock.getElapsedTime());
    setGoalRotation(myGroup.current.rotation.y + (Math.PI * 2) / numPlanes); // Rotate by 360 degrees (2 * Math.PI)  \divided by numPlanes
  };

  useFrame(({ clock }) => {
    const speed = 0.01;

    if (myGroup.current.rotation.y < goalRotation) {
      // Continue rotating until reaching the goal rotation
      const elapsedTime = clock.elapsedTime - startingTime;
      myGroup.current.rotation.y += elapsedTime * speed;
    } else {
      // Stop rotating once the goal rotation is reached
    }
  });

  return (
    <>
      <group ref={myGroup} position={[0, 0.1, 2]} rotation={[0,offset,0]}>
        {records.map((record, i) => {
          const angle = (i / numPlanes) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = 0;
          const z = Math.sin(angle) * radius;

          const rotateY = angle; // Add Math.PI/2 to make it face outward

          return <Record position={[x, y, z]} key={i} src={record.src} />;
        })}
      </group>
      <Text position={[0, -2, 0]} onClick={handleClick}>
        Next
      </Text>
    </>
  );
}

// const angle = (i / numPlanes) * Math.PI * 2;
// const x = Math.cos(angle) * radius;
// const z = Math.sin(angle) * radius;
