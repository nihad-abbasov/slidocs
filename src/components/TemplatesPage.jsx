import Link from "next/link";
import Image from "next/image";
import { templates } from "../../db";

export const TemplatesPage = () => {
  return (
    <div className="container !my-[4em]">
      <h1 className="text-[40px] font-bold mb-[1em]">Templates Page</h1>
      <article>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {templates.map((temp) => {
            return (
              <li className="card cursor-pointer" key={temp.id}>
                <Link
                  href={`/${temp.id}`}
                  className="w-full flex flex-col justify-between items-center"
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
      </article>
    </div>
  );
};
