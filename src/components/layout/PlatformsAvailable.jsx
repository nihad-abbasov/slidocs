import { platforms } from "../../../db";
import Image from "next/image";

export const PlatformsAvailable = () => {
  return (
    <ul className="flex flex-row justify-between items-center gap-3">
      {platforms.map((plat) => {
        return (
          <li
            key={plat.id}
            style={{ background: `${plat.bgColor}` }}
            className="w-[30%] p-1 rounded-3xl"
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              src={plat.imgUrl}
              alt={plat.name}
            />
          </li>
        );
      })}
    </ul>
  );
};
