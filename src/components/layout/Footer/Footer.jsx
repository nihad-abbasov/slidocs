import { Logo } from "../../reusable/Logo";
import Link from "next/link";
import { footerElements } from "../../../../db";
import { FooterElement } from "./FooterElement";

export const Footer = () => {
  return (
    <footer className="footer_unique_container bg-white py-[3em] px-2 rounded-xl">
      <div className="footer_wrapper grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <div className="w-[60%] flex flex-col justify-between items-center md:items-start">
          <Link href="/">
            <Logo />
          </Link>
          <p className="font-light text-sm">
            &copy; 2023 <a href="https://www.slidocs.com">slidocs.com</a>
          </p>
        </div>
        <div className="flex flex-col justify-evenly w-[100%] my-[2em]">
          <h6 className="w-full mb-2 font-bold text-center md:text-left">
            Navigation
          </h6>
          <ul className="flex flex-col w-full justify-between items-center md:items-start">
            {footerElements.map((el) => {
              return <FooterElement key={el.id} element={el} />;
            })}
          </ul>
        </div>
        <div className="footer-contact_info bg-[#6b53fd] text-white p-7 rounded-[35px] w-full md:w-[65%]">
          <div
            className="footer-contact_info-content flex flex-col justify-around h-full bg-contain bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/at.png')",
            }}
          >
            <p className="flex flex-col items-start font-light">
              <span>Have a question?</span>
              <span>Write to us!</span>
            </p>
            <a
              href="mailto:hello@slidocs.com"
              className="font-semibold hover:underline"
            >
              hello@slidocs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
