"use client";

import { useState, useEffect } from "react";
import { Preload, Text, useCursor } from "@react-three/drei";

import { useLoader, type Vector3 } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import dynamic from "next/dynamic";

interface TextPosition {
    position: number[];
    type: string;
    hovered: boolean;
}

export default function Ben() {
    const [textData, setTextData] = useState<TextPosition[]>([]);
    const [hovered, setHovered] = useState<boolean>(false);
    useCursor(hovered); //controls cursor

    const obj = useLoader(OBJLoader, "/textModel/TextBen.obj");

    useEffect(() => {
        const fetchData = () => {
            //@ts-expect-error this geometry does exist here
            const modelGeometry = obj.children[0].geometry;
            const positions = modelGeometry.attributes.position.array;
            const existingArrays = new Set();
            const textPos = [];

            for (let i = 0; i < positions.length; i++) {
                const x = positions[i * 3];
                const y = positions[i * 3 + 1];
                const z = positions[i * 3 + 2];

                const newArray = [x, y, z];

                if (!existingArrays.has(newArray.toString())) {
                    //get rid of duplicates
                    existingArrays.add(newArray.toString()); //add to set
                    const options = ["Ben", "Eidson", "Code", "Music", "Ben", "Eidson"];
                    const randomNum = Math.floor(Math.random() * options.length);
                    const type = options[randomNum];
                    textPos.push({ position: newArray, type: type, hovered: false }); //add to array
                }

                if (i > positions.length / 3 - 1) {
                    break;
                }
            }
            setTextData(textPos);
        };

        fetchData();
    }, [obj.children]);

    const handlePointerOver = (index: number) => {
        setTextData((prevState) => {
            const updatedData = [...prevState];
            updatedData[index].hovered = true;
            updatedData[index].type === "Code" || updatedData[index].type === "Music"
                ? setHovered(true)
                : setHovered(false);
            return updatedData;
        });
    };

    const handlePointerOut = (index: number) => {
        setTextData((prevState) => {
            const updatedData = [...prevState];
            updatedData[index].hovered = false;
            setHovered(false);
            return updatedData;
        });
    };

    function handleMouseClick(index: number) {
        if (textData[index].type === "Music") {
            window.location.href = "/music";
        }

        if (textData[index].type === "Code") {
            window.location.href = "/code";
        }
    }

    return (
        <>
            <group position={[0, -2, -4]} rotation={[0.4, 2.8, 0.0]}>
                {textData.map((text, i) => (
                    <Text
                        position={text.position as Vector3}
                        key={i}
                        fontSize={0.05}
                        color={
                            text.hovered && (text.type === "Music" || text.type === "Code")
                                ? "red"
                                : "black"
                        }
                        onPointerOut={() => handlePointerOut(i)}
                        onPointerOver={() => handlePointerOver(i)}
                        onClick={() => handleMouseClick(i)}
                    >
                        {text.type}
                    </Text>
                ))}
            </group>
        </>
    )
}

// add PRELOAD