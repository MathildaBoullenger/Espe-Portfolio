"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import HamburgerIcon from "./HamburgerIcon"; // Import your hamburger icon component


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the screen width breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const smallScreenLinks = (
    <div className="flex flex-col items-center justify-center text-center">
      <a className="text-intellectual-grey block mb-6 hover:text-light-gold" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
        <HamburgerIcon/>
      </a>
      <ul className={`${isOpen ? "block w-auto space-y-8 mb-8 " : "hidden"}`}>

        <Link
          className="px-4 py-4 text-xl tablet:text-2xl m-3 md:m-6 font-inter font-bold text-intellectual-grey hover:text-white hover:bg-intellectual-grey no-underline rounded-lg"
          href="/"
        >
          Home
        </Link>
        <li>
          <Link
            className="px-4 py-4 text-xl tablet:text-xl m-3 md:m-6 text-intellectual-grey hover:text-white hover:bg-intellectual-grey font-bold font-inter rounded-lg transition-all ease-out duration-300 cursor-none no-underline bg-gold p-2"
            href="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-4 text-xl tablet:text-xl m-3 md:m-6 text-intellectual-grey hover:text-white hover:bg-intellectual-grey font-bold font-inter rounded-lg transition-all ease-out duration-300 cursor-none no-underline bg-gold p-2"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-4 text-xl tablet:text-xl m-3 md:m-6 text-intellectual-grey hover:text-white hover:bg-intellectual-grey font-bold font-inter rounded-lg transition-all ease-out duration-300 cursor-none no-underline bg-gold p-2"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );

  const largeScreenLinks = (
    <div className="flex justify-between items-center py-8">
      <Link className="text-xl font-inter font-bold text-md tablet:text-base text-intellectual-grey no-underline" href="/">
        Home
      </Link>
      <div className="md:hidden" onClick={toggleMenu}>
        <HamburgerIcon />
      </div>
      <ul className="md:flex md:items-center md:w-auto space-x-8">
        <li>
          <Link
            className="text-xl text-intellectual-grey hover:text-white font-bold px-4 py-4 font-inter text-md rounded-lg transition-all ease-out duration-300 hover:bg-black hover:scale-105 active:scale-100 cursor-none no-underline"
            href="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-intellectual-grey hover:text-white font-bold px-4 py-4 font-inter text-md rounded-lg transition-all ease-out duration-300 hover:bg-black hover:scale-105 active:scale-100 cursor-none no-underline"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-intellectual-grey hover:text-white font-bold px-4 py-4 font-inter text-md rounded-lg transition-all ease-out duration-300 hover:bg-black hover:scale-105 active:scale-100 cursor-none no-underline"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav>
      {isSmallScreen ? smallScreenLinks : largeScreenLinks}
    </nav>
  );
}




    {/*<nav>
      <div className="flex justify-between items-center py-8">
        <Link className="font-inter font-bold text-md tablet:text-base text-intellectual-grey no-underline" href="/">
            Home
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          <HamburgerIcon />
        </div>
        <ul
          className={`${
            isOpen ? "flex flex-col text-2xl p-4" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <li>
            <Link className="text-intellectual-grey hover:text-intellectual-grey font-bold px-4 py-4 font-inter  text-md rounded-lg transition-all ease-out duration-300 hover:bg-black hover:scale-105 active:scale-100 cursor-none no-underline" href="/services">
          Services
            </Link>
          </li>
          <li>
            <Link className="text-intellectual-grey hover:text-intellectual-grey font-bold px-4 py-4 font-inter  text-md rounded-lg transition-all ease-out duration-300 hover:bg-black hover:scale-105 active:scale-100 cursor-none no-underline" href="/projects">
          Projects
            </Link>
          </li>
          <li>
            <Link className="text-intellectual-grey hover:text-intellectual-grey font-bold px-4 py-4 font-inter  text-md rounded-lg transition-all ease-out duration-300 hover:bg-black hover:scale-105 active:scale-100 cursor-none no-underline" href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
        </nav>*/}

