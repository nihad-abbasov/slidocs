import Link from "next/link";
import Image from "next/image";
import { templatesShortList } from "../../../../../db";
import { IoIosArrowForward } from "react-icons/io";
import { TemplateCard } from "../../TemplatesPage/TemplateCard";

export const TemplatesSection = () => {
  return (
    <section className="willFadeIn">
      <article className="w-full flex flex-col sm:flex-row justify-between items-center mb-[3em]">
        <h4 className="text-[40px] font-bold mb-[1em] sm:mb-0 text-black dark:text-white">Templates</h4>
        <Link
          href="/templates"
          // target="_blank"
          // rel="noopener noreferrer"
          className="bg-black text-white py-2 px-4 md:p-5 rounded-full hover:shadow-2xl transition-shadow duration-300 whitespace-nowrap overflow-hidden text-ellipsis flex flex-row items-center justify-between"
        >
          <IoIosArrowForward className="bg-white fill-black p-4 rounded-full mr-3 w-full h-full" />
          <span>See all slides</span>
        </Link>
      </article>

      <article>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {templatesShortList.map((temp) => {
            return (
              <TemplateCard key={temp.id} template={temp} />
              // <li className="card cursor-pointer p-0" key={temp.id}>
              //   <Link
              //     href={`/template-info/${+temp.id}`}
              //     className="w-[90%] mx-auto px-5 py-7 flex flex-col justify-between items-center gap-3"
              //   >
              //     <Image
              //       src={temp.imgUrl}
              //       alt={temp.name}
              //       width={0}
              //       height={0}
              //       sizes="100vw"
              //       className="w-full rounded-[20px]"
              //     />
              //     <div className="temp_detailes w-full flex flex-row justify-between items-center">
              //       <h5>{temp.category}</h5>
              //       <span className="temp_amount bg-black text-white py-2 px-4 rounded-full whitespace-nowrap overflow-hidden text-ellipsis">
              //         {temp.amountAvailable} Slides
              //       </span>
              //     </div>
              //   </Link>
              // </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
