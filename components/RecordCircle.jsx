"use client";

import { Html, Text, Billboard, PresentationControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

function Record({ position, key, src }) {
  const myMesh = useRef();
  const { camera } = useThree();

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
  const offset = -0.3; //maybe make offset a prop
  const fullSpeed = 0.1;

  const [goalRotation, setGoalRotation] = useState(offset);
  const [startingTime, setStartingTime] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(fullSpeed);
  const [isBackward, setIsBackward] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const myGroup = useRef();
  const { clock } = useThree();

  const handleClickBackward = () => {
    // Start the rotation if not already rotating
    if (!isRotating) {
      console.log("rarara");
      setIsRotating(true);
      setIsBackward(true);
      setStartingTime(clock.getElapsedTime());
      setGoalRotation(myGroup.current.rotation.y + (Math.PI * 2) / numPlanes); // Rotate by 360 degrees (2 * Math.PI)  \divided by numPlanes
      setRotationSpeed(fullSpeed); // reset speed
    }
  };
  const handleClickForward = () => {
    // Start the rotation if not already rotating
    if (!isRotating) {
      setIsRotating(true);
      setIsBackward(false);
      setStartingTime(clock.getElapsedTime());
      setGoalRotation(myGroup.current.rotation.y - (Math.PI * 2) / numPlanes); // Rotate by 360 degrees (2 * Math.PI)  \divided by numPlanes
      setRotationSpeed(-fullSpeed); // reset speed
    }
  };

  useFrame(({ clock }) => {
    const decelerationFactor = 0.9745; // Adjust this value to control the deceleration rate
    const minSpeed = 0.00001;

    if (
      (isBackward && myGroup.current.rotation.y < goalRotation) ||
      (!isBackward && myGroup.current.rotation.y > goalRotation)
    ) {
      setRotationSpeed(rotationSpeed * decelerationFactor);
      // Continue rotating until reaching the goal rotation
      const elapsedTime = clock.elapsedTime - startingTime;
      myGroup.current.rotation.y += elapsedTime * rotationSpeed;
    } else {
      setIsRotating(false);
    }
  });

  return (
    <>
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <group ref={myGroup} position={[0, 0.1, 1.8]} rotation={[0, offset, 0]}>
          {records.map((record, i) => {
            const angle = (i / numPlanes) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = 0;
            const z = Math.sin(angle) * radius;

            const rotateY = angle; // Add Math.PI/2 to make it face outward

            return <Record position={[x, y, z]} key={i} src={record.src} />;
          })}
        </group>
      </PresentationControls>

      <Text position={[1, -3, 0]} onClick={handleClickForward} color={'black'} fontSize={0.3}>
        Next
      </Text>
      <Text
        position={[-1, -3, 0]}
        onClick={handleClickBackward}
        color={"black"}
        fontSize={0.3}
      >
        Previous
      </Text>
    </>
  );
}

// const angle = (i / numPlanes) * Math.PI * 2;
// const x = Math.cos(angle) * radius;
// const z = Math.sin(angle) * radius;
