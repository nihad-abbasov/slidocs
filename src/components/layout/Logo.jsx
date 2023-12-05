import Image from "next/image";

export const Logo = ({ layout }) => {
  const imgSrc = layout === "header" ? "/header_logo.svg" : "/footer_logo.svg";
  return (
    <Image
      priority
      src={imgSrc}
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-[80%] h-auto"
    />
  );
};
