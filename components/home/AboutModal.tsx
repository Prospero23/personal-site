"use client";
import { type SetStateAction } from "react";
interface AboutModalProps{
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void 
}

export default function AboutModal({showModal, setShowModal}: AboutModalProps) {
  return (
      showModal ? (
        // TODO: use better HTML element for this
        <>
        <div className={`absolute top-0 left-0 w-screen h-screen cursor-pointer bg-black z-30 bg-opacity-70`}          
onClick={()=> setShowModal(false)}></div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-50 pointer-events-none">
            <div id="test" className="relative w-auto my-6 mx-auto max-w-3xl z-50 pointer-events-auto">
              {/* content */}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-customPink outline-none focus:outline-none text-gray-800 bg-opacity-90">
                {/* header */}
                <div className="text-center p-5 rounded-t pb-0">
                  <h3 className="text-3xl">About</h3>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto pt-0">
                  <p className="my-4 text-sm md:text-lg leading-relaxed">
                    Hey! I play music, organize concerts and code. I graduated
                    from The New England Conservatory with a degree in Jazz
                    Performance and have performed throughout the United States
                    in various groups on both saxophone and laptop at
                    festivals/conferences including recently the Catalytic Sound
                    Festival and TENOR. I have made software for musical
                    performances and the WORLD WIDE WEB. More information can be
                    found on the respective pages about these things. Please
                    reach out with whatever.
                  </p>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 rounded-b pt-0">
                  <button
                    className="background-transparent font-bold uppercase py-0 px-2 text-sm mr-1 mb-1 hover:border-b border-pink-400"
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
      ) : null)
}