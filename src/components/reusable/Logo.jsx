import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.jpeg"
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-[100%] h-auto"
    />
  );
};
