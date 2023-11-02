"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { templates } from "../../db";

const ITEMS_PER_PAGE = 6;

export const TemplatesPage = () => {
  const [visibleItems, setVisibleItems] = useState(
    templates.slice(0, ITEMS_PER_PAGE)
  );
  const [page, setPage] = useState(1);

  const buttonLabel =
    visibleItems.length < templates.length
      ? `See More (${templates.length - visibleItems.length})`
      : "Show Less";

  const loadMoreItems = () => {
    if (visibleItems.length < templates.length) {
      // Load more items
      const newVisibleCount = visibleItems.length + ITEMS_PER_PAGE;
      setVisibleItems(
        templates.slice(0, Math.min(newVisibleCount, templates.length))
      );
      setPage(page + 1);
    } else {
      // Already showing all items, reset to show less
      setVisibleItems(templates.slice(0, ITEMS_PER_PAGE));
      setPage(1);
    }
  };

  return (
    <div className="container !my-[4em]">
      <h1 className="text-[40px] font-bold mb-[1em]">Templates Page</h1>
      <article>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {visibleItems.map((temp) => {
            return (
              <li className="card cursor-pointer" key={temp.id}>
                <Link
                  href={`/${temp.id}`}
                  className="w-[90%] mx-auto px-5 py-7 flex flex-col justify-between items-center gap-3"
                >
                  <Image
                    src={temp.imgUrl}
                    alt={temp.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <div className="temp_detailes w-full flex flex-row justify-between items-center">
                    <h5>{temp.category}</h5>
                    <span className="temp_amount bg-black text-white py-2 px-4 rounded-full">
                      {temp.amountAvailable} Slides
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* "See More" Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreItems}
            className="bg-blue-500 text-white text-lg px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            {buttonLabel}
          </button>
        </div>
      </article>
    </div>
  );
};
