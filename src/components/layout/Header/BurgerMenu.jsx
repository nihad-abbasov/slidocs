"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../../reusable/Logo";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative md:hidden">
      <div className="grid grid-cols-2 items-center">
        <Link href="/" className="w-[80%]">
          <Logo />
        </Link>
        {/* Burger Icon */}
        {/* top-0 */}
        <div className="absolute right-5 z-50" onClick={toggleMenu}>
          <div
            className={`burger-menu space-y-2 ${isOpen ? "hidden" : "block"}`}
          >
            <div className="line bg-gray-600 h-1 w-8 rounded-full"></div>
            <div className="line bg-gray-600 h-1 w-8 rounded-full"></div>
            <div className="line bg-gray-600 h-1 w-8 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay fixed inset-0 bg-black opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Content */}
      <div
        className={`menu-content flex flex-col fixed right-0 top-0 w-9/12 sm:w-6/12 h-full bg-white p-3 z-50 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition duration-500 ease-in-out`}
        onClick={toggleMenu}
      >
        {/* Close Icon */}
        <div className="close-icon absolute top-7 right-7" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <div className="registerBtns grid grid-cols-2 border-[0.5px] border-gray-500 py-1 px-3 mt-[20%] mb-3 rounded-full">
          <Link
            href="/login"
            alt="Login"
            className="flex items-center justify-center px-2 py-0 mr-2 rounded-full bg-gray-300 text-black text-center hover:bg-gray-200 hover:scale-90 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/sign_up"
            alt="Sign Up"
            className="py-[12px] px-[25px] rounded-full bg-black text-white text-center inline-block hover:bg-gray-700 hover:scale-90 transition duration-300 "
          >
            Sign Up
          </Link>
        </div>

        <Link
          href="/buy-access"
          alt="Buy Access"
          className="w-full py-[12px] px-[25px] mr-3 rounded-full bg-[#6B53FD] text-white text-center inline-block hover:bg-[#5e49de] hover:scale-105 transition duration-300 "
        >
          Buy Access
        </Link>

        <Link
          href="/pricing"
          alt="Pricing"
          className="w-full py-[12px] px-[25px] mr-3 mt-2 rounded-full bg-[#e2d634] text-black text-center inline-block hover:bg-[#de9149] hover:scale-105 transition duration-300 "
        >
          Pricing
        </Link>

        <ul className="page-links mt-8">
          <li>
            <Link href="/" className="block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/info/about" className="block py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/info/contact" className="block py-2">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/info/refund" className="block py-2">
              Refund
            </Link>
          </li>
        </ul>

        {/* Theme Switcher Button */}
        <div className="theme-switcher mt-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">
            Switch Theme
          </button>
        </div>
      </div>
    </div>
  );
};
