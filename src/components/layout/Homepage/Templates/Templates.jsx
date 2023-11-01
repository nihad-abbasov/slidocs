import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    id: 1,
    name: "Services",
    imgUrl: "/templates/temp1.webp",
    category: "Services",
    amountAvailable: 15,
  },
  {
    id: 2,
    name: "Services",
    imgUrl: "/templates/temp2.webp",
    category: "Services",
    amountAvailable: 20,
  },
  {
    id: 3,
    name: "Services",
    imgUrl: "/templates/temp3.webp",
    category: "Services",
    amountAvailable: 10,
  },
  {
    id: 4,
    name: "Services",
    imgUrl: "/templates/temp4.webp",
    category: "Services",
    amountAvailable: 20,
  },
  {
    id: 5,
    name: "Services",
    imgUrl: "/templates/temp5.webp",
    category: "Services",
    amountAvailable: 15,
  },
  {
    id: 6,
    name: "Services",
    imgUrl: "/templates/temp6.webp",
    category: "Services",
    amountAvailable: 18,
  },
];

export const Templates = () => {
  return (
    <section>
      <article className="w-full flex flex-row justify-between items-center mb-[2em]">
        <h4>Templastes</h4>
        <Link
          href="/templates"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-5 rounded-full hover:shadow-2xl transition-shadow duration-300"
        >
          See all slides
        </Link>
      </article>

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
    </section>
  );
};
