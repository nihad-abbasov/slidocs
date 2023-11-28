"use client";

import { useEffect, useState } from "react";

export const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="BackToTopBtnWillRaise willFadeIn fixed right-[5%] bottom-[12%] lg:right-[25px] lg:bottom-[25px] z-30 flex items-center justify-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] cursor-pointer bg-[#6B53FD] rounded-2xl hover:scale-90 transition duration-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="block w-2/3 h-2/3 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.0001 4.83594L5.79297 11.043L7.20718 12.4573L12.0001 7.66436L16.793 12.4573L18.2072 11.043L12.0001 4.83594ZM12.0001 10.4858L5.79297 16.6929L7.20718 18.1072L12.0001 13.3143L16.793 18.1072L18.2072 16.6929L12.0001 10.4858Z"></path>
        </svg>
      </button>
    )
  );
};
