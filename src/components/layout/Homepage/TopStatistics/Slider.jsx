"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { slides } from "../../../../../db.js";

const SlideOptions = {
  type: "fade",
  rewind: true,
  autoplay: true,
  speed: 2000,
  interval: 3000,
  arrows: false,
};

export const Slider = () => {
  return (
    <Splide aria-label="My Favorite Images" options={SlideOptions}>
      {slides.map((slide) => {
        return (
          <SplideSlide key={slide.id}>
            <div className="slide_wrapper relative">
              <Image
                src={slide.imgUrl}
                alt={slide.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[100%] h-full my-0 mx-auto rounded-[35px]"
              />
              <h2 className="absolute top-[55%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-lg md:text-4xl text-white font-semibold w-[80%] md:w-[75%]">
                {slide.text}
              </h2>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
