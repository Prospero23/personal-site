"use client";

import { useState } from "react";

interface CodingDataItem {
  title: string;
  description: string;
  link?: string;
}

export default function CodeModal({ side }: { side: CodingDataItem }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="absolute bottom-14 z-20 text-white bg-none w-full text-center">
        <button
          className="z-20  text-2xl lg:text-6xl xl:text-7xl  hover:bg-pink-400 text-white underline uppercase md:hidden short-screen:inline short-screen:text-xl"
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          {side.title}
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-pink-200 outline-none focus:outline-none text-black">
                {/* header */}
                <div className="text-center p-5 rounded-t pb-0">
                  <h3 className="text-3xl">{side.title}</h3>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto pt-0">
                  <p className="my-4 text-sm leading-relaxed">
                    {side.description}
                  </p>
                </div>
                {side.link != null ? (
                  <a
                    className="hover:underline text-center text-sm underline"
                    href={`${side.link}`}
                  >
                    check it out here
                  </a>
                ) : (
                  ""
                )}

                {/* footer */}
                <div className="flex items-center justify-end p-6 rounded-b pt-0">
                  <button
                    className="background-transparent font-bold uppercase py-0 text-sm mr-1 mb-1 hover:bg-pink-400"
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
