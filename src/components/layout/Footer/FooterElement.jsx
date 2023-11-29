import Link from "next/link";

export const FooterElement = ({ element }) => {
  return (
    <li className="lg:w-[40%] text-sm font-light mb-1 text-center md:text-left text-black dark:text-white">
      <Link className="hover:underline" href={`/info${element.url}`}>
        {element.pageTitle}
      </Link>
    </li>
  );
};
