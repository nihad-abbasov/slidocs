import { Logo } from "../../reusable/Logo";
import Link from "next/link";

const footerElements = [
  { id: 1, name: "About Us", url: "/about" },
  { id: 2, name: "Terms & Conditions", url: "/terms" },
  { id: 3, name: "Privacy Policy", url: "/privacy" },
  { id: 4, name: "Refund", url: "/refund" },
];

export const Footer = () => {
  return (
    <footer className="footer_unique_container bg-white py-[3em] px-2 rounded-xl">
      <div className="footer_wrapper grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <div className="w-[60%] flex flex-col justify-between items-center md:items-start">
          <Link href="/">
            <Logo />
          </Link>
          <p className="font-light text-sm">
            &copy; 2023 <a href="https://www.sliddex.com">sliddex.com</a>
          </p>
        </div>
        <div className="flex flex-col justify-evenly w-[100%] my-[2em]">
          <h6 className="w-full mb-2 font-bold text-center md:text-left">Navigation</h6>
          <ul className="flex flex-col w-full justify-between items-center md:items-start">
            {footerElements.map((el) => {
              return (
                <li
                  key={el.id}
                  className="w-[40%] font-light mb-1 text-center md:text-left"
                >
                  <Link className="hover:underline" href={el.url}>
                    {el.name}
                  </Link>
                </li>
              );
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
              href="mailto:hello@sliddex.com"
              className="font-semibold hover:underline"
            >
              hello@sliddex.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
