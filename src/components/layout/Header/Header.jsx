import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../reusable/Logo";
import { headerElements } from "../../../../db";
import { HeaderElement } from "./HeaderElement";

export const Header = () => {
  return (
    <header className="py-[40px]">
      <div className="header_wrapper container flex flex-col md:flex-row items-center justify-between">
        <div className="header_links w-full md:w-[40%]">
          <ul className="grid grid-cols-2 items-center justify-items-center md:justify-items-start">
            <li className="logo_wrapper mr-[30px] bg-black">
              <Link href="/">
                <Logo />
              </Link>
            </li>
            {headerElements.map((el) => {
              return <HeaderElement key={el.id} element={el} />;
            })}
          </ul>
        </div>
        <div className="header_actions mt-4 md:mt-0 grid grid-cols-4 w-full md:w-auto">
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
          <Link
            href="/login"
            alt="Login"
            className="py-[12px] px-[25px] mr-3 rounded-full bg-white text-black text-center hover:bg-gray-200 hover:scale-90 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/sign_up"
            alt="Sign Up"
            className="py-[12px] px-[25px] rounded-full bg-[#6B53FD] text-white text-center inline-block hover:bg-[#5e49de] hover:scale-105 transition duration-300 "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};
