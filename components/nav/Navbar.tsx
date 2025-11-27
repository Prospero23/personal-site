"use client";

import Link from "next/link";
import { useState } from "react";

import NavLink from "./NavLink";
import ToggleMenu from "./ToggleMenu";
import ExitDiv from "./ExitDiv";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(false);
  };
  return (
    <>
      <nav className="w-full absolute left-0 top-0 bg-customPink/70 z-30000">
        <div
          id="nav-container"
          className="justify-between px-4 mx-auto md:items-center md:flex md:px-8 lg:max-w-7xl"
        >
          {/* TODO: this could use a better ID */}
          <div id="small-nav" className="flex justify-between py-3 md:py-5">
            <Link
              href="/"
              className="text-2xl xl:text-4xl text-ghost-white font-bold hover:underline underline-offset-4  active:text-pink-400 flex items-center justify-center"
            >
              Ben Eidson {/* make my navlink take a child prop? */}
            </Link>
            <div id="navbar-toggle" className="md:hidden">
              <ToggleMenu isOpen={navbar} setIsOpen={setNavbar} />
            </div>
          </div>
          <div
            id="nav-links"
            className={`flex pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="w-full space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl xl:text-2xl ">
              <li className="flex justify-center sm:justify-start md:justify-center">
                <NavLink href="/code" text="Code" onClick={handleClick} />
              </li>
              <li className="flex justify-center sm:justify-start md:justify-center">
                <NavLink href="/music" text="Music" onClick={handleClick} />
              </li>
              {/* TODO: <li className="flex justify-center sm:justify-start md:justify-center">
              <NavLink
                href="/"
                text="CV"
                onClick={handleClick}
              />
            </li> */}
              <li className="flex justify-center sm:justify-start md:justify-center">
                <NavLink href="/contact" text="Contact" onClick={handleClick} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {navbar && <ExitDiv toggleShowing={setNavbar}></ExitDiv>}
    </>
  );
}
