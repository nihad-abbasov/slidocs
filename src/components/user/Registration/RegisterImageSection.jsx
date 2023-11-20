import Image from "next/image";

export const RegisterImageSection = () => {
  return (
    <div className="form_image w-[90%]">
      <figure className="card flex flex-col justify-center items-center !py-20 !px-0">
        <Image
          src="/registration-illustration.svg"
          alt="Team Work"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[70%] h-full mb-[15%]"
        />
        <figcaption className="w-[60%] text-center text-sm font-light">
          Explore the library, find the perfect slides and collect your deck
          faster and easier than from scratch.
        </figcaption>
      </figure>
    </div>
  );
};
