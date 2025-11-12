"use client"
import CanvasComponent from "@/components/home/HomePageCanvas";
import AboutModal from "@/components/home/AboutModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <main className="flex w-screen h-[calc(100dvh)] justify-end items-end bg-customPink touch-none">
      <div className="z-10 mb-20 mr-10 flex flex-col items-center">
        <h1 className="text-white ml-6 sm:ml-0 text-4xl sm:text-4xl md:text-6xl lg:text-8xl  xl:text-9xl mb-2">
          BEN EIDSON
        </h1>
        <div className="flex justify-end w-full">
          <button
            className="text-2xl lg:text-5xl xl:text-6xl  hover:border-b border-pink-400 text-white"
            type="button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            About Me
          </button>
        </div>
      </div>
      <div className="absolute w-screen h-screen top-0 left-0">
        <CanvasComponent />
      </div>
      <AboutModal showModal={showModal} setShowModal={setShowModal}/>
    </main>
  );
}

// accessibility
