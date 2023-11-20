import Image from "next/image";

export const InformationalSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <article className="card min-h-[400px] w-[85%]">
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
          <li className="flex flex-col items-start font-bold text-4xl">
            <p className="mb-[10px] leading-tight">
              Perfect Pitch Deck without stress?
            </p>
            <p>Easy!</p>
          </li>
          <li className="flex flex-col items-start text-[#686868] text-base">
            Explore the library, find the perfect slides and collect your deck
            faster and easier than from scratch using super cool pre-designed
            pitch deck template
          </li>
        </ul>
      </article>
      <article className="bg-[url('/informational-bg.webp')] bg-cover bg-no-repeat bg-center rounded-[35px] w-full"></article>
    </section>
  );
};
