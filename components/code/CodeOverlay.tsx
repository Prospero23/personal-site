import { CODING_CONFIG, CodingDataItem } from "@/data/coding";
import { Selection } from "./cube/GriddedCube";
import { useState } from "react";
import CodeModal from "./modal/CodeModal";

interface CodeOverlayProps {
  currentSelection: Selection;
}
export default function CodeOverlay({ currentSelection }: CodeOverlayProps) {
  const [showModal, setShowModal] = useState(false);
  const { face, square } = currentSelection;

  const categoryData = CODING_CONFIG[face];

  let item: CodingDataItem | null = null;
  if (categoryData && square != null) {
    item = categoryData.squares[square];
  }

  const isItem = item !== null;

  const title = item?.title ?? categoryData?.title;
  const description = item?.description ?? categoryData?.description;
  const mdx = item?.mdx ?? null;

  return (
    <>
      <div className="absolute bottom-14 z-20 text-ghost-white bg-none w-full text-center">
        {isItem ? (
          <button
            className="uppercase text-2xl mb-2 underline cursor-pointer active:text-pink-400 hover:font-bold"
            onClick={() => setShowModal(true)}
          >
            {title}
          </button>
        ) : (
          <h1 className="uppercase text-2xl mb-2">{title}</h1>
        )}

        <p className="mx-32 text-sm lg:text-base hidden md:block short-screen:hidden">
          {description}
        </p>
      </div>
      {showModal && (
        <>
          <CodeModal setShowModal={setShowModal} Mdx={mdx} />
          <div
            className="fixed inset-0 z-40000 cursor-pointer bg-transparent"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </>
  );
}
