import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface KeyboardControlledOrbitProps {
  sensitivity?: number;
}

export const KeyboardControlledOrbit: React.FC<
  KeyboardControlledOrbitProps
> = ({ sensitivity = 2, ...props }: KeyboardControlledOrbitProps) => {
  const orbitRef = useRef<any>(null);
  const keyStates = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
  }).current;

  // const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key in keyStates) {
        keyStates[event.key as keyof typeof keyStates] = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key in keyStates) {
        keyStates[event.key as keyof typeof keyStates] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyStates]);

  useFrame(() => {
    const controls = orbitRef.current;
    if (controls == null) return;

    // console.log(orbitRef.rotation);

    // if (keyStates.ArrowUp) orbitRef.current;
    // if (keyStates.ArrowDown) orbitRef.current;
    // if (keyStates.ArrowRight) orbitRef.current;
    // if (keyStates.ArrowLeft) orbitRef.current;

    controls.update();
  });

  return <OrbitControls ref={orbitRef} />;
};

export default KeyboardControlledOrbit;
