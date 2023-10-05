"use client";

import { useState } from "react";

export default function AboutModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className="z-20  text-2xl lg:text-6xl xl:text-7xl  hover:bg-pink-400 text-white"
                type="button"
                onClick={() => setShowModal(true)}
            >
                About Me
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-pink-200 outline-none focus:outline-none text-black">
                                {/*header*/}
                                <div className="text-center p-5 rounded-t pb-0">
                                    <h3 className="text-3xl">
                                        About
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto pt-0">
                                    <p className="my-4 text-sm md:text-lg leading-relaxed">
                                        Hey! I play music, organize concerts and code. I
                                        graduated from The New England Conservatory with a degree in
                                        Jazz Performance and have performed throughout the United
                                        States in various groups on both saxophone and laptop at festivals/conferences including recently the
                                        Catalytic Sound Festival and TENOR.
                                        I have made software for musical performances and the WORLD WIDE WEB. More information can be
                                        found on the respective pages about these things. Please reach out with whatever.

                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 rounded-b pt-0">
                                    <button
                                        className="background-transparent font-bold uppercase py-0 text-sm mr-1 mb-1 hover:bg-pink-500"
                                        type="button"
                                        onClick={() => setShowModal(false)}
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
