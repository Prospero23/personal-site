"use client";
import { Plane } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { type Dispatch, type SetStateAction, useRef, useEffect } from "react";
import { type Group, Vector3 } from "three";
import gsap from "gsap";

interface CubeProps {
  size: number;
  setClosestFace: Dispatch<SetStateAction<number>>;
}

export default function Cube({ size, setClosestFace }: CubeProps) {
  const groupRef = useRef<Group>(null);
  const lastClosestRef = useRef<number | null>(null);
  const worldPosition = useRef(new Vector3()).current;
  const { camera } = useThree();

  // handle key presses
  useEffect(() => {
    // TODO: round to nearest proper devision first
    const handleKeyDown = (event: any) => {
      if (groupRef.current != null) {
        switch (event.key) {
          case "ArrowUp":
            gsap.to(groupRef.current.rotation, {
              x: groupRef.current.rotation.x + Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;
          case "ArrowDown":
            gsap.to(groupRef.current.rotation, {
              x: groupRef.current.rotation.x - Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;
          case "ArrowLeft":
            gsap.to(groupRef.current.rotation, {
              y: groupRef.current.rotation.y + Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;
          case "ArrowRight":
            gsap.to(groupRef.current.rotation, {
              y: groupRef.current.rotation.y - Math.PI / 2,
              duration: 0.5,
              ease: "power3.out",
            });
            break;

          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getClosestFace() {
    let minDistance = Infinity; // Initialize to a large value
    let closestChildIndex = -1; // Initialize to an invalid index
    if (groupRef.current != null) {
      groupRef.current.children.forEach((child, index) => {
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
        setClosestFace(closestChildIndex);
      }
    }
  }
  // gives closest face every frame
  useFrame(() => {
    getClosestFace();
  });

  return (
    <group ref={groupRef} position={[0, 1, -8]}>
      {/* Front face text offset fixes clipping */}
      <Plane args={[size, size]} position={[0, 0, size / 2]}>
        <meshStandardMaterial color="green" />
      </Plane>
      {/* Back face */}
      <Plane
        args={[size, size]}
        position={[0, 0, -size / 2]}
        rotation={[0, Math.PI, 0]}
      >
        <meshStandardMaterial color="red" />
      </Plane>
      {/* Top face */}
      <Plane
        args={[size, size]}
        position={[0, size / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="black" />
      </Plane>
      {/* Bottom face */}
      <Plane
        args={[size, size]}
        position={[0, -size / 2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="blue" />
      </Plane>
      {/* Right face */}
      <Plane
        args={[size, size]}
        position={[size / 2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="purple" />
      </Plane>
      {/* Left face */}
      <Plane
        args={[size, size]}
        position={[-size / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="orange" />
      </Plane>
    </group>
  );
}
// divide each plane into 2 x 2 grid
