"use client";
import { type SetStateAction } from "react";
interface AboutModalProps {
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void;
}

export default function AboutModal({
  showModal,
  setShowModal,
}: AboutModalProps) {
  return showModal ? (
    // TODO: use better HTML element for this use a portal?
    <>
      <div
        className={`absolute top-0 left-0 w-screen h-screen cursor-pointer bg-clear z-30`}
        onClick={() => {
          setShowModal(false);
        }}
      ></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-50 pointer-events-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl z-50 pointer-events-auto">
          {/* content */}
          <div className="rounded-lg shadow-xl relative flex flex-col w-full bg-customPink/90 outline-none focus:outline-none text-gray-800">
            {/* header */}
            <div className="text-center p-5 rounded-t pb-0">
              <h3 className="text-3xl">Bio</h3>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto pt-0 text-sm md:text-lg my-4 leading-relaxed">
              <p>
                I play music, organize{" "}
                <a
                  target="_blank"
                  href="https://bigsound.live/"
                  className="underline hover:text-pink-400"
                  rel="noreferrer"
                >
                  concerts
                </a>{" "}
                and code.
              </p>
              <p className="my-6">
                I graduated from The New England Conservatory with a degree in
                Jazz Performance and have performed throughout the United States
                in various groups on both saxophone and laptop at
                festivals/conferences including the Catalytic Sound Festival and
                TENOR.
              </p>
              <p>
                I have made software for musical performances, native devices,
                and the WORLD WIDE WEB. More information can be found on the
                respective pages about these things.
              </p>
              <p className=" mt-6">Please reach out!</p>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 rounded-b pt-0">
              <button
                className="font-bold uppercase py-0 px-2 text-sm mr-1 mb-1 hover:underline hover:cursor-pointer underline-offset-4 active:text-pink-400"
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
  ) : null;
}
