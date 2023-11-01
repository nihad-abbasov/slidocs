import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../reusable/Logo";

const headerElements = [{ id: 1, name: "Pricing", url: "/pricing" }];

export const Header = () => {
  return (
    <header className="py-[40px]">
      <div className="header_wrapper container flex flex-col md:flex-row items-center justify-between">
        <div className="header_links w-full md:w-[40%]">
          <ul className="grid grid-cols-2 items-center justify-items-center md:justify-items-start">
            <li className="logo_wrapper mr-[30px] bg-black">
              <Logo />
            </li>
            {headerElements.map((el) => {
              return (
                <li key={el.id} className="mr-[10px] last:mr-0 block w-max">
                  <Link
                    href={el.url}
                    alt={el.name}
                    className="py-[12px] px-[25px] rounded-full bg-white text-black hover:bg-blue-500 hover:text-white hover:scale-90 transition duration-300"
                  >
                    {el.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="header_actions mt-4 grid grid-cols-2 w-full md:w-auto">
          <Link
            href="/profile"
            alt="Buy Access"
            className="py-[12px] px-[25px] mr-3 rounded-full bg-white text-black text-center hover:bg-gray-200 hover:scale-90 transition duration-300"
          >
            My Profile
          </Link>
          <Link
            href="/buy-access"
            alt="Buy Access"
            className="py-[12px] px-[25px] rounded-full bg-[#6B53FD] text-white text-center inline-block hover:bg-[#5e49de] hover:scale-105 transition duration-300 "
          >
            Buy Access
          </Link>
        </div>
      </div>
    </header>
  );
};
