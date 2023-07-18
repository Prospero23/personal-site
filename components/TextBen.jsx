import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Text } from '@react-three/drei';

const TextBen = () => {
  const obj = useLoader(OBJLoader, 'textModel/TextBen.obj');
  const modelGeometry = obj.children[0].geometry;
  const positions = modelGeometry.attributes.position.array;

  const textElements = positions.map((_, i) => {
    const x = positions[i * 3];
    const y = positions[i * 3 + 1];
    const z = positions[i * 3 + 2];

    // Break out of the loop if z-coordinate reaches the end of the array
    if (i > positions.length / 3 - 1) {
      return null;
    }

    return (
      <mesh key={i} position={[x, y, z]}>
        <Text
          fontSize={0.1}
          color="white"
        >'TRIAL'</Text>
      </mesh>
    );
  });

  return <group>{textElements}</group>;
};

export default TextBen;
