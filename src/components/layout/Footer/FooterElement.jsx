import Link from "next/link";

export const FooterElement = ({ element }) => {
  return (
    <li
      className="w-[40%] font-light mb-1 text-center md:text-left"
    >
      <Link className="hover:underline" href={`/info${element.url}`}>
        {element.name}
      </Link>
    </li>
  );
};
