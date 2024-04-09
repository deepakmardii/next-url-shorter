"use client";
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  console.log(showMe);
  const gap = "gap-10";
  const linkHover = "  md:hover:text-Violet  ";

  return (
    <>
      <nav
        className={
          "font-medium py-10 md:py-0 px-8 md:px-20 flex items-center justify-between md:justify-start max-w-7xl mx-auto text-lg  "
        }
      >
        <div className="logo md:mr-10">
          <Image src="/images/logo.svg" alt="logo" height={33} width={121} />
        </div>
        <div
          className={`${
            showMe ? "" : "hidden"
          } md:flex absolute md:static md:items-center rounded-xl top-24 bg-Violet md:bg-transparent md:text-gray-400 text-white md:justify-between md:w-full flex-col md:flex-row inset-x-0 mx-8 z-50`}
        >
          <div
            className={`links flex flex-col items-center gap-6 my-8 md:flex-row md:${gap}`}
          >
            <Link href="/">
              <p className={linkHover}>Feature </p>
            </Link>
            <Link href="/">
              <p className={linkHover}>Pricing</p>
            </Link>
            <Link href="/">
              <p className={linkHover}>Resources</p>
            </Link>
          </div>
          <hr className="border w-[80%] mx-8 border-gray-600 md:hidden" />
          <div
            className={`right flex w-full md:w-auto items-center flex-col md:flex-row gap-8 my-8 md:${gap}`}
          >
            <Link href="/">
              <p className={linkHover}>Login</p>
            </Link>
            <Link href="/">
              <p className="hover:opacity-50 cursor text-center bg-bluish px-6 py-2 text-white rounded-full ">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
        <div className="menu md:hidden">
          {showMe ? (
            <VscChromeClose
              className="fill-gray-400 text-4xl cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <AiOutlineMenu
              className="fill-gray-400 text-4xl cursor-pointer"
              onClick={toggle}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
