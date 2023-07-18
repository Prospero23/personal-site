'use client'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";


import { useLoader } from '@react-three/fiber'

export default function Ben() {

    //const materials = useLoader(MTLLoader, 'Model/BEN_CLEAN.mtl')
    const obj = useLoader(OBJLoader,  'Model/BEN_CLEAN.obj')
    return <primitive object={obj} scale= {4} rotation = {[0.5, 2.5 , -1.65]} position= {[10 , 10, -30]}/>
}

// (loader) => {
//     materials.preload();
//     loader.setMaterials(materials)
// }