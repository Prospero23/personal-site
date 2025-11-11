import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { type Vector3, type Group } from "three";
import { Billboard, Html } from "@react-three/drei";



interface RecordProps {
  position: Vector3;
  src: string;
}

export default function Record({ position, src }: RecordProps) {
  const record = useRef<Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (record.current != null) {
      record.current.lookAt(camera.position);
    }
  });

  return (
    <Billboard position={position} ref={record} follow>
      <Html transform distanceFactor={1.2}>
        <iframe src={src} seamless height={360} width={360}></iframe>
      </Html>
    </Billboard>
  );
}