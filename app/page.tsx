import CanvasComponent from "@/components/homePage/HomePageCanvas";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen justify-end items-end">
      <div className="z-10 mb-20 mr-10 flex flex-col items-center">
        <h1 className="text-white ml-6 sm:ml-0 text-4xl sm:text-4xl md:text-6xl lg:text-8xl  xl:text-9xl mb-2">BEN EIDSON</h1>
        <div className="flex justify-end w-full">
          <Link href="/contact" className="z-20  text-2xl lg:text-6xl xl:text-7xl  hover:bg-pink-400 text-white">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="absolute w-screen h-screen top-0 left-0">
        <CanvasComponent />
      </div>
    </main>
  );
}

//accessibility