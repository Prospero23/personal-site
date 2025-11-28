"use client";
import { type SetStateAction } from "react";
import About from "../../data/markdown/About.mdx";
import Modal from "../code/modal/CodeModal";
interface AboutModalProps {
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void;
}

export default function AboutModal({
  showModal,
  setShowModal,
}: AboutModalProps) {
  function handleClose() {
    setShowModal(false);
    console.log("called");
  }
  return (
    showModal && (
      <>
        <div
          aria-hidden="true"
          className={`absolute top-0 left-0 w-full h-full cursor-pointer bg-clear z-30000`}
          onClick={handleClose}
        ></div>
        <div className="fixed inset-0 z-50000 flex items-center justify-center  pointer-events-none">
          {/* shell */}
          <div className="pointer-events-auto relative mx-4 w-full max-w-2xl p-2">
            <div className="modal-card">
              {/* content with scroll */}
              <div className="relative flex-1 overflow-y-auto">
                {/* inner padding */}
                <div className="p-6">
                  <article className="prose prose-sm prose-headings:m-2 prose-h1:mb-4 lg:prose-base prose-headings:font-semibold prose-h1:text-center prose-a:text-pink-700 prose-a:no-underline prose-a:hover:underline">
                    <About />
                  </article>
                </div>
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
      </>
    )
  );
}
