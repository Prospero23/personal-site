"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Record() {
  const myMesh = useRef();

  let angle = 0.3

  useFrame(({ clock }) => {
    const speed = 0.1;
    const radius = 3
    myMesh.current.position.x = Math.cos(1) * radius;
    myMesh.current.position.z = Math.sin(clock.getElapsedTime()) * speed;
  });
  return (
    <mesh position={[0, 0, 3.7]} ref={myMesh}>
      <planeGeometry />
      <Html className="" transform distanceFactor={1.16}>
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=3351662876/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
          seamless
          height={360}
          width={360}
        ></iframe>
      </Html>
    </mesh>
  );
}



// const angle = (i / numPlanes) * Math.PI * 2;
// const x = Math.cos(angle) * radius;
// const z = Math.sin(angle) * radius;