"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    name: "Slide 1",
    imgUrl: "/slide.webp",
    text: "Pitch Deck Template that saves you ton of time",
  },
  {
    id: 2,
    name: "Slide 2",
    imgUrl: "/slide.webp",
    text: "Lorem ipsum sit amet nolin pilom kante kondogbia",
  },
  {
    id: 3,
    name: "Slide 3",
    imgUrl: "/slide.webp",
    text: "Milan pirlo Ibrahimovic maldini cafu zidane",
  },
];

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
                className="w-[100%] h-full my-0 mx-auto"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-3xl text-white font-semibold w-[70%]">
                {slide.text}
              </h2>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
