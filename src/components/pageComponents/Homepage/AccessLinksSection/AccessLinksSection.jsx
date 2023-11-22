"use client";

import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion-3d";
// import AccessButton from "./AccessButton/AccessButton";

export const AccessLinksSection = () => {
  return (
    <section className="willFadeIn grid grid-cols-1 lg:grid-cols-2 gap-4">
      <article className="">
        <div className="relative w-full h-full">
          <Image
            src="/access.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full rounded-full"
            alt="Get Full Access"
          />
          <Link
            href="/buy-access"
            className="text-white w-[80%] lg:w-[60%] bg-black hover:bg-white hover:text-black font-semibold text-lg lg:text-2xl text-center transition duration-300 ease-in-out p-4 lg:p-8 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-105"
          >
            Get Full Access for $39
          </Link>
        </div>

        {/* <div className="w-[70%] m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <AccessButton />
        </div> */}
      </article>
      <article className="grid grid-cols-1 justify-items-end gap-4 w-[100%] lg:w-[100%]">
        <Link
          // href="/download"
          href="/buy-access"
          className="card w-full flex flex-row items-center justify-between !px-[10%] lg:!px-[10%]"
        >
          <div className="card_content">
            <h4 className="font-semibold text-xl">Try Demo</h4>
            <p className="text-sm">Free 10 Slides for Personal Use</p>
          </div>
          <div className="card_icon">
            <Image
              src="/download.svg"
              alt="Download"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[80%] lg:w-full h-full"
            />
          </div>
        </Link>
        <Link
          href="/info/privacy"
          className="card w-full flex flex-row items-center justify-between !px-[10%] lg:!px-[10%]"
        >
          <div className="card_content">
            <h4 className="font-semibold text-xl">Secure Payments</h4>
            {/* <p>Free 10 Slides for Personal Use</p> */}
          </div>
          <div className="card_icon">
            <Image
              src="/secure.svg"
              alt="Secure"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[80%] lg:w-full h-full"
            />
          </div>
        </Link>
      </article>
    </section>
  );
};
