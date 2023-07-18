"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import AsciiEffectComp from "@/components/AsciiEffectComp";
import Ben from "@/components/Ben";
import TextBen from '@/components/TextBen'

import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from "three";



export default function CanvasComponent() {

  function handleMusicClick(){
    return 
  }
  function handleCodeClick(){
    return 
  }

  const obj = useLoader(OBJLoader, 'textModel/TextBen.obj');
  //const texture = useLoader(TextureLoader, 'Model/BEN_CLEAN.jpg');
  const modelGeometry = obj.children[0].geometry;
  const positions = modelGeometry.attributes.position.array;
  const existingArrays = new Set()
  const textPos = [];

  for (let i = 0; i < positions.length; i++){ 
    const x = positions[i*3];
    const y = positions[i*3+1];
    const z = positions[i*3+2];
    
    const newArray = [x,y,z]

    if (!existingArrays.has(newArray.toString())){ //get rid of duplicates

      existingArrays.add(newArray.toString()); //add to set
      textPos.push(newArray); //add to array
    }

    console.log('bang')

    if (i > positions.length / 3 - 1) {
      break;
    }
  }
console.log(textPos)

  return (
    <Canvas>
      <color attach="background" args={["pink"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 0, 0.2]} angle={0.15} penumbra={1} />

      <OrbitControls />
      {
        textPos.map((array, i) =>{
          const randomNum = Math.floor(Math.random() * 2 );
          
          return(
          <Text position={array} key={i} fontSize={0.05} color={'black'}>{randomNum ==- 0 ? 'Code' : 'Music' }</Text>
          )
        })
      }
    </Canvas>
  );
}


{/* <Text fontSize={0.1} color="white" position={[x, y, z]}>Test</Text> */}
     {/* <Text color={"purple"} position={[0,-5,-10]} rotation={[0, 0.0, 0.8]}>Coding</Text>
<Text color={"green"} position={[-8,-5,-9]} rotation={[0, 0.2, -0.8]}>Music</Text> */}
{/* <Text color={"black"} position={[-4,11,-9]} rotation={[0, 0, 0]}>HI, I'M</Text>
<mesh>
</mesh>
<Text color={"black"} position={[-4,10,-9]} rotation={[0, 0, 0]}>BEN EIDSON</Text> */}
