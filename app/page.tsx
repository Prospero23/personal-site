import CanvasComponent from "@/components/CanvasComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen justify-end items-end">
      <div className="z-10 mb-20 mr-10 flex flex-col items-center">
        <h1 className="text-white text-8xl mb-4 user-select-none">BEN EIDSON</h1>
        <div className="flex justify-end w-full">
          <Link href="/contact" className="z-20 text-4xl hover:bg-pink-400">
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