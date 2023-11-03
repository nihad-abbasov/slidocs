import Link from "next/link";
import Image from "next/image";
import { templatesShortList } from "../../../../../db";

export const Templates = () => {
  return (
    <section>
      <article className="w-full flex flex-col sm:flex-row justify-between items-center mb-[3em]">
        <h4 className="text-[40px] font-bold mb-[1em] sm:mb-0 ">Templates</h4>
        <Link
          href="/templates"
          // target="_blank"
          // rel="noopener noreferrer"
          className="bg-black text-white py-2 px-4 md:p-5 rounded-full hover:shadow-2xl transition-shadow duration-300 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          See all slides
        </Link>
      </article>

      <article>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {templatesShortList.map((temp) => {
            return (
              <li className="card cursor-pointer p-0" key={temp.id}>
                <Link
                  href={`/template-info/${+temp.id}`}
                  className="w-[90%] mx-auto px-5 py-7 flex flex-col justify-between items-center gap-3"
                >
                  <Image
                    src={temp.imgUrl}
                    alt={temp.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full rounded-[20px]"
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
      </article>
    </section>
  );
};
