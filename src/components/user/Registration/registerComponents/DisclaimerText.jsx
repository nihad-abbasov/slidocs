import Link from "next/link";

export const DisclaimerText = () => {
  return (
    <p className="text-xs text-center text-black dark:text-white">
      By creating account you agree to our&nbsp;
      <Link
        className="font-semibold hover:underline"
        href="/info/terms"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Service
      </Link>
      &nbsp;and&nbsp;
      <Link
        className="font-semibold hover:underline"
        href="/info/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>
      .
    </p>
  );
};
