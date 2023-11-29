import Image from "next/image";

export const InformationalSection = () => {
  return (
    <section className="willFadeIn grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
      <article className="card min-h-[400px]">
        <ul className="py-[2em] px-[1em] flex flex-col items-start justify-between h-full">
          <li>
            <Image
              src="/emoji-heart_eye.svg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              alt="Folder"
            />
          </li>
          <li>
            <h3 className="flex flex-col items-start font-bold text-4xl my-[20px]">
              <p className="mb-[10px] leading-tight w-full lg:w-[70%]">
                Perfect Pitch Deck without stress?
              </p>
              <p>Easy!</p>
            </h3>
          </li>
          <li className="flex flex-col items-start text-[#686868] text-base">
            Explore the library, find the perfect slides and collect your deck
            faster and easier than from scratch using super cool pre-designed
            pitch deck template
          </li>
        </ul>
      </article>
      <article className="">
        <Image
          src="/informational-bg.webp"
          alt="Perfect Pitch Deck"
          className="w-full rounded-[35px]"
          width={0}
          height={0}
          sizes="100vw"
        />
      </article>
    </section>
  );
};
