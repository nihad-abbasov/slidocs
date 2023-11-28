"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { slides } from "../../../../../db.js";
import { currentYear } from "../../../../utils/getTime";

const SlideOptions = {
  type: "fade",
  rewind: true,
  autoplay: true,
  speed: 2000,
  interval: 5000,
  arrows: false,
};

export const Slider = () => {
  return (
    <Splide aria-label="My Favorite Images" options={SlideOptions}>
      {slides.map((slide) => {
        return (
          <SplideSlide key={slide.id}>
            <div className="slide_wrapper relative flex flex-col items-center">
              <Image
                priority
                src={slide.imgUrl}
                alt={slide.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[100%] h-full my-0 mx-auto rounded-[35px]"
              />
              <h2 className="absolute top-[55%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-lg lg:text-4xl lg:leading-tight text-white font-semibold w-[80%] md:w-[90%]">
                {slide.text}
              </h2>
              <div className="absolute top-[10%] flex items-center justify-between w-[90%] !mx-auto">
                <span className="text-white font-extralight">2023</span>
                <span className="w-[40px] h-[40px] flex items-center justify-center bg-white text-black text-center font-normal p-[2%] rounded-full">{`0${slide.id}`}</span>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
