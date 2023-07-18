import { useRef, useEffect } from 'react';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect';
import { useThree, extend } from '@react-three/fiber';

extend({ AsciiEffect });

export default function AsciiEffectComp() {
  const { gl, scene, camera, size } = useThree();
  const effectRef = useRef(null);

  useEffect(() => {
    effectRef.current = new AsciiEffect(gl, ' .:-+*=%@#', { invert: true });
    effectRef.current.setSize(size.width, size.height);
    scene.add(effectRef.current);

    return () => {
      scene.remove(effectRef.current);
      effectRef.current.dispose();
    };
  }, [gl, scene, size]);

  useEffect(() => {
    effectRef.current.setSize(size.width, size.height);
  }, [size]);

  return null;
}