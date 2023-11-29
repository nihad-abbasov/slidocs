"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const BottomNav = () => {
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 1200 && setShowBottomNav(true);
    });
  }, []);

  return showBottomNav ? (
    <nav className="willFadeIn grid grid-cols-2 gap-3 w-full py-3 px-2 fixed bottom-0 z-20 bg-white rounded-tl-3xl rounded-tr-3xl md:hidden">
      <Link
        href="/buy-access"
        alt="Buy Access"
        className="w-full py-[12px] px-[25px] rounded-full bg-[#6B53FD] text-white text-center inline-block hover:bg-[#5e49de] hover:scale-105 transition duration-300 "
      >
        Buy Access
      </Link>

      <Link
        href="/pricing"
        alt="Pricing"
        className="w-full py-[12px] px-[25px] rounded-full bg-[#e2d634] text-black text-center inline-block hover:bg-[#de9149] hover:scale-105 transition duration-300 "
      >
        Pricing
      </Link>
    </nav>
  ) : null;
};
