"use client";

import Image from "next/image";
import Link from "next/link";
import { headerElements } from "../../../../db";
import { HeaderElement } from "./HeaderElement";
import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "../Logo";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";
import { useState, useEffect } from "react";

const isAuth = false;

export const Header = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    setMiniCartOpen(false);
  }, []);

  const stickyClassName = isHeaderSticky
    ? "headerWillFade fixed top-0 left-0 w-full z-50 py-[15px] px-[10px] !lg:py-[5px] lg:px-[0] bg-white"
    : "py-[15px] px-[10px] lg:py-[30px] lg:px-0 ";

  const headerBoxShadowStyle = isHeaderSticky
    ? "0 2px 24px 0 rgba(0, 0, 0, 0.15)"
    : "none";

  return (
    <header
      className={`${stickyClassName}`}
      style={{ boxShadow: headerBoxShadowStyle }}
    >
      <div className="header_wrapper container md:flex flex-col md:flex-row items-center justify-between hidden">
        <div className="header_links w-full md:w-[40%]">
          <ul className="grid grid-cols-2 items-center justify-items-center md:justify-items-start">
            <li className="logo_wrapper mr-[30px] bg-black">
              <Link href="/">
                <Logo />
              </Link>
            </li>
            {headerElements.map((el) => {
              return <HeaderElement key={el.id} element={el} />;
            })}
          </ul>
        </div>
        <div className="header_actions mt-4 md:mt-0 flex flex-row items-center justify-between w-full md:w-auto">
          <Link
            href="/buy-access"
            alt="Buy Access"
            className="py-[12px] px-[25px] mr-3 rounded-full bg-[#6B53FD] text-white text-center inline-block hover:bg-[#5e49de] hover:scale-105 transition duration-300 "
          >
            Buy Access
          </Link>
          {isAuth ? (
            <Link
              href="/profile"
              alt="Buy Access"
              className="py-[12px] px-[25px] mr-3 rounded-full bg-white text-black text-center hover:bg-gray-200 hover:scale-90 transition duration-300"
            >
              My Profile
            </Link>
          ) : null}
          <div className="registerBtns flex flex-row items-center justify-between py-1 px-3">
            <Link
              href="/login"
              alt="Login"
              className="py-[12px] px-[25px] mr-2 rounded-full bg-white text-black text-center hover:bg-gray-200 hover:scale-90 transition duration-300"
            >
              Login
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <BurgerMenu isHeaderSticky={isHeaderSticky} />
    </header>
  );
};
