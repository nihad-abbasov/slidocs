import Link from "next/link";

export const HeaderElement = ({ element }) => {
  return (
    <li className="mr-[10px] last:mr-0 block w-max">
      <Link
        href={`${element.url}`}
        alt={element.name}
        className="py-[12px] px-[25px] rounded-full bg-white text-black hover:bg-blue-500 hover:text-white hover:scale-90 transition duration-300"
      >
        {element.name}
      </Link>
    </li>
  );
};
