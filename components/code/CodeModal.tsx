"use client";

import { Dispatch, SetStateAction } from "react";
import { MDXContent } from "@/data/coding";

interface CodeModalProps {
  Mdx: MDXContent | null;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function CodeModal({ Mdx, setShowModal }: CodeModalProps) {
  return (
    <div className="fixed inset-0 z-50000 flex items-center justify-center pointer-events-none">
      {/* shell */}
      <div className="pointer-events-auto relative mx-4 my-6 w-full max-w-2xl">
        <div className="flex max-h-[80vh] w-full flex-col overflow-hidden rounded-lg bg-customPink/90 text-gray-800 shadow-lg">
          {/* content */}
          <div className="flex-1 overflow-y-auto p-6">
            <article className="prose prose-sm lg:prose-base prose-headings:font-semibold prose-h1:text-center prose-a:text-pink-700 prose-a:no-underline hover:prose-a:underline">
              {Mdx ? <Mdx /> : <p>No further information.</p>}
            </article>
          </div>

          {/* footer */}
          <div className="flex items-center justify-end px-6 py-3">
            <button
              className="font-bold uppercase py-0 text-sm mr-1 mb-1 cursor-pointer hover:underline active:text-pink-400"
              type="button"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
