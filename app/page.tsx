import CanvasComponent from "@/components/CanvasComponent";
import Link from "next/link";

export default function Home() {
  return(
    <main className="flex justify-center w-screen h-screen ">
      {/* <h1 className="text-white text-8xl z-10 mt-40">BEN EIDSON</h1> */}
    <div className="absolute w-screen h-screen top-0 left-0">
    <CanvasComponent/>
    </div>
    </main>
  )
}
