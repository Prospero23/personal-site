import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { type Vector3, type Group } from "three";
import { Billboard, Html } from "@react-three/drei";
import { Recording } from "@/data/recordings";



interface RecordProps {
  position: Vector3;
  recording: Recording
}

export default function Record({ position, recording }: RecordProps) {
  const record = useRef<Group>(null);
  const { camera } = useThree();

  const sideLength = 360;

  // 16:9 for videos, square for audio.
  const size = recording.kind == "video" ? {width: (sideLength * 16) / 9, height: sideLength}
  : {width: sideLength, height: sideLength};

  useFrame(() => {
    if (record.current != null) {
      record.current.lookAt(camera.position);
    }
  });

  return (
    <Billboard position={position} ref={record} follow>
      <Html transform occlude distanceFactor={1.2} zIndexRange={[4000, 0]}>
        {recording.kind == "audio" ?
          <iframe
          src={recording.src}
          seamless
          height={size.height}
          width={size.width}
          title={recording.title}
          ></iframe> :
          <iframe
          src={recording.src}
          seamless
          height={size.height}
          width={size.width}
          title={recording.title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe>
      }
      </Html>
    </Billboard>
  );
}