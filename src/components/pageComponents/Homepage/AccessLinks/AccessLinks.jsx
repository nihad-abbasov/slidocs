"use client";

import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion-3d";
// import AccessButton from "./AccessButton/AccessButton";

export const AccessLinks = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <article className="bg-[url('/access.webp')] bg-cover bg-no-repeat bg-center min-h-[350px] relative">
        {/* before:content-[''] before:block before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-20 before:rounded-[35px] */}
        <Link
          href="/buy-access"
          className="text-white w-[60%] bg-black hover:bg-white hover:text-black font-semibold text-2xl text-center transition duration-500 ease-in-out p-8 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110"
        >
          Get Full Access for $39
        </Link>
        {/* <div className="w-[70%] m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <AccessButton />
        </div> */}
      </article>
      <article className="grid grid-cols-1 gap-4 w-[90%]">
        <Link
          // href="/download"
          href="/buy-access"
          className="card w-full flex flex-row items-center justify-between !px-[10%] lg:!px-[10%]"
        >
          <div className="card_content">
            <h4 className="font-semibold text-xl">Try Demo</h4>
            <p>Free 10 Slides for Personal Use</p>
          </div>
          <div className="card_icon">
            <Image
              src="/download.svg"
              alt="Download"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
        </Link>
        <Link
          href="/privacy"
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
              className="w-full h-full"
            />
          </div>
        </Link>
      </article>
    </section>
  );
};
