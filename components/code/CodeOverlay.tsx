import { type CodingData } from "@/data/coding";

interface CodeOverlayProps {
  codingData: CodingData;
  closestFace: number;
}
export default function CodeOverlay({
  codingData,
  closestFace,
}: CodeOverlayProps) {
  return (
    <div className="absolute bottom-14 z-20 text-white bg-none w-full text-center hidden md:block short-screen:hidden">
      <h1 className="uppercase text-2xl mb-2">
        {codingData[closestFace].title}
      </h1>
      {
        <p className="mx-32 text-sm lg:text-base">
          {codingData[closestFace].description}
        </p>
      }
      {codingData[closestFace].link != null ? (
        <a className="hover:underline" href={`${codingData[closestFace].link}`}>
          check it out here
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
