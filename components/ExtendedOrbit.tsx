import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, type OrbitControlsProps } from "@react-three/drei";

interface KeyboardControlledOrbitProps extends OrbitControlsProps {
  sensitivity?: number;
}

export const KeyboardControlledOrbit: React.FC<
  KeyboardControlledOrbitProps
> = ({ sensitivity = 2, ...props }: KeyboardControlledOrbitProps) => {
  const orbitRef = useRef<any>(null);
  const keyStatesRef = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
  });

  // const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key in keyStatesRef.current) {
        keyStatesRef.current[event.key as keyof typeof keyStatesRef.current] =
          true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key in keyStatesRef.current) {
        keyStatesRef.current[event.key as keyof typeof keyStatesRef.current] =
          false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyStatesRef]);

  useFrame(() => {
    const controls = orbitRef.current;
    if (controls == null) return;

    // if (keyStates.ArrowUp) orbitRef.current;
    // if (keyStates.ArrowDown) orbitRef.current;
    // if (keyStates.ArrowRight) orbitRef.current;
    // if (keyStates.ArrowLeft) orbitRef.current;

    controls.update();
  });

  return <OrbitControls ref={orbitRef} {...props} />;
};

export default KeyboardControlledOrbit;
