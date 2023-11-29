import Link from "next/link";
import { GoogleBtn } from "./GoogleBtn";

export const Suggestion = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-base mt-6 mb-3 text-black dark:text-white">
        OR
      </p>
      <GoogleBtn />
      <p className="text-xs font-light text-center tracking-wider text-black dark:text-white">
        You don't have an account yet?{" "}
        <Link
          href="/sign_up"
          className="text-[#6922F0] dark:text-pink-500 font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};
