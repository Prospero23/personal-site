import { CodingDataBySide, CodingDataItem, SIDE_META } from "@/data/coding";
import { Selection } from "./cube/GriddedCube";

interface CodeOverlayProps {
  codingData: CodingDataBySide;
  currentSelection: Selection;
}
export default function CodeOverlay({
  codingData,
  currentSelection,
}: CodeOverlayProps) {
  const { face, square } = currentSelection;

  const categoryData = SIDE_META[face];

  let item: CodingDataItem | null = null;
  if (square != null) {
    item = codingData[face][square]; // may still be null
  }

  // const title = item?.title ?? categoryData?.title;
  // const description = item?.description ?? categoryData?.description;
  // const link = item?.link; // only projects have links, usually

  const title =
    currentSelection.square != null ? "PROJECT" : categoryData?.title;
  const description =
    currentSelection.square != null
      ? "lorem ipsum yada yada"
      : categoryData?.description;
  const link = currentSelection.square != null ? "LINK HERE" : ""; // only projects have links, usually

  return (
    <div className="absolute bottom-14 z-20 text-white bg-none w-full text-center hidden md:block short-screen:hidden">
      <h1 className="uppercase text-2xl mb-2">{title}</h1>
      {<p className="mx-32 text-sm lg:text-base">{description}</p>}
      {link && (
        <a className="hover:underline" href={link}>
          check it out here
        </a>
      )}
    </div>
  );
}
