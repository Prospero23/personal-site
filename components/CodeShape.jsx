"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Plane } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";
import Image from "next/image";

const cubeSize = 8; // Side length of the cube
const halfSize = cubeSize / 2; // Half of the side length, used for positioning planes

export default function CodeShape() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      //ref.current.rotation.x += 0.01; // apply the offset to the rotation (scaled down)
      //ref.current.rotation.y += 0.01; // apply the offset to the rotation (scaled down)
    }
  });

  return (
    <group position={[0, 0, -8]} ref={ref}>
      {/* Front face text offset fixes clipping*/}
      <Plane args={[cubeSize, cubeSize]} position={[0, 0, halfSize]}>
      <meshStandardMaterial color="black" />
        <Html transform>
        <Image src='/basicSideFace.png' alt="Picture of binSynth homepage" width={300} height={300}/> 
        </Html>
      </Plane>
      {/* Back face */}
      <Plane
        args={[cubeSize, cubeSize]}
        position={[0, 0, -halfSize]}
        rotation={[0, Math.PI, 0]}
      >
        <meshStandardMaterial color="black" />
        <Html transform>
        <a href="https://binsynth.vercel.app/">
          <Image src='/binsynth.png' alt="Picture of binSynth homepage" width={300} height={300}/> 
          </a>
        </Html>
      </Plane>
      {/* Top face */}
      <Plane
        args={[cubeSize, cubeSize]}
        position={[0, halfSize, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="black" />

        <Html transform>
          <iframe
            width="300"
            height="300"
            src="https://www.youtube.com/embed/AIMB2VJclkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Html>
      </Plane>
      {/* Bottom face */}
      <Plane
        args={[cubeSize, cubeSize]}
        position={[0, -halfSize, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="black" />


        <Html transform>
          <iframe
            width="300"
            height="300"
            src="https://www.youtube.com/embed/ZwfgKpYsR80" //this is the don paul
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Html>
      </Plane>
      {/* Right face */}
      <Plane
        args={[cubeSize, cubeSize]}
        position={[halfSize, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="black" />
      </Plane>
      {/* Left face */}
      <Plane
        args={[cubeSize, cubeSize]}
        position={[-halfSize, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="black" />
        <Html transform>
        <Image src='/Website.png' alt="Picture of binSynth homepage" width={300} height={300}/> 
        </Html>

      </Plane>
    </group>
  );
}
