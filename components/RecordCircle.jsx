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
    <Billboard position={position} ref={myMesh} follow>
      <Html className="" transform distanceFactor={1.16}>
        <iframe src={src} seamless height={360} width={360} key={key}></iframe>
      </Html>
    </Billboard>
  );
}

export default function RecordCircle({ records }) {
  const numPlanes = records.length;
  const radius = 2; 
  const offset = -0.3 //maybe make offset a prop
  const fullSpeed = 0.1;

  const [goalRotation, setGoalRotation] = useState(offset);
  const [startingTime, setStartingTime] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(fullSpeed);
  //maybe add back isRotating state

  const myGroup = useRef();
  const { clock } = useThree();

  const handleClick = () => {
    // Start the rotation if not already rotating

    setStartingTime(clock.getElapsedTime());
    setGoalRotation(myGroup.current.rotation.y + (Math.PI * 2) / numPlanes); // Rotate by 360 degrees (2 * Math.PI)  \divided by numPlanes
    setRotationSpeed(fullSpeed) // reset speed
  };

  useFrame(({ clock }) => {
    
    const decelerationFactor = 0.974; // Adjust this value to control the deceleration rate

    if (myGroup.current.rotation.y < goalRotation) {
      setRotationSpeed(rotationSpeed * decelerationFactor)
      // Continue rotating until reaching the goal rotation
      const elapsedTime = clock.elapsedTime - startingTime;
      myGroup.current.rotation.y += elapsedTime * rotationSpeed;
    } else {
      // Stop rotating once the goal rotation is reached
    }
  });

  return (
    <>
      <group ref={myGroup} position={[0, 0.1, 1.8]} rotation={[0,offset,0]}>
        {records.map((record, i) => {
          const angle = (i / numPlanes) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = 0;
          const z = Math.sin(angle) * radius;

          const rotateY = angle; // Add Math.PI/2 to make it face outward

          return <Record position={[x, y, z]} key={i} src={record.src} />;
        })}
      </group>
      <Text position={[4, -3, 0]} onClick={handleClick} color={"white"}>
        Next
      </Text>
      <Text position={[-4, -3, 0]} onClick={handleClick} color={"white"}>
        Previous
      </Text>
    </>
  );
}

// const angle = (i / numPlanes) * Math.PI * 2;
// const x = Math.cos(angle) * radius;
// const z = Math.sin(angle) * radius;
