import Link from "next/link";

const errorMessage = {
  sectionStyling: "min-h-[50vh] flex flex-col justify-center items-center",
  titleStyling: "text-3xl text-center font-bold mb-[1em]",
  buttonStyling: "bg-blue-400 hover:bg-blue-600 text-white text-center rounded-full p-5 transition duration-200",
  text: "Route not found.",
};

export const NotFound = () => {
  return (
    <section className={errorMessage.sectionStyling}>
      <h1 className={errorMessage.titleStyling}>{errorMessage.text}</h1>
      <Link href="/" className={errorMessage.buttonStyling}>
        &larr; Go back to Homapage
      </Link>
    </section>
  );
};

export default NotFound;
