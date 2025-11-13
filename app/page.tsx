"use client"
import CanvasComponent from "@/components/home/HomePageCanvas";
import AboutModal from "@/components/home/AboutModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const cursorStyle = isHovered ? 'cursor-pointer' : 'cursor-grab'
  const activeCursorStyle = isHovered ? '' : 'active:cursor-grabbing'
  
  return (
    <main className="w-screen h-[calc(100dvh)] relative bg-customPink">
      <div 
      className={`absolute h-full w-full top-0 left-0 ${cursorStyle} ${activeCursorStyle}`}
      aria-label="3D model of Ben made of floating text. Code and Music pieces act as links."
      >
        <CanvasComponent setIsHovered={setIsHovered}/>
      </div>

      {/* DOM Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none text-white">
        <div className="mb-10 mr-10 gap-2 flex flex-col items-end">
          <h1 className="ml-6 sm:ml-0 text-4xl sm:text-4xl md:text-6xl lg:text-8xl">
            BEN EIDSON
          </h1>
          <div className="flex justify-end w-full">
            <button
              className="text-2xl md:3xl lg:text-5xl pointer-events-auto  hover:underline underline-offset-4 active:text-pink-400"
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
      <AboutModal showModal={showModal} setShowModal={setShowModal}/>
    </main>
  );
}

// accessibility
