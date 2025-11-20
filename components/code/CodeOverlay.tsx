import { CODING_CONFIG, CodingDataItem } from "@/data/coding";
import { Selection } from "./cube/GriddedCube";

interface CodeOverlayProps {
  currentSelection: Selection;
}
export default function CodeOverlay({ currentSelection }: CodeOverlayProps) {
  const { face, square } = currentSelection;

  const categoryData = CODING_CONFIG[face];

  let item: CodingDataItem | null = null;
  if (categoryData && square != null) {
    item = categoryData.squares[square];
  }

  const title = item?.title ?? categoryData?.title;
  const description = item?.description ?? categoryData?.description;

  return (
    <div className="absolute bottom-14 z-20 text-white bg-none w-full text-center">
      <button className="uppercase text-2xl mb-2 hover:underline cursor-pointer">
        {title}
      </button>
      <p className="mx-32 text-sm lg:text-base hidden md:block short-screen:hidden">
        {description}
      </p>
    </div>
  );
}
