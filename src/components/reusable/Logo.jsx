import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      priority
      src="/logo.jpeg"
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-[80%] md:w-[100%] h-auto"
    />
  );
};
