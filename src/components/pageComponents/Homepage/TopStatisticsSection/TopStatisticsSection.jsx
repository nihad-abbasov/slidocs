import Image from "next/image";
import { Slider } from "./Slider";
import { smallCards, platforms } from "../../../../../db";

export const TopStatisticsSection = () => {
  return (
    <section className="willFadeIn flex flex-col md:flex-row items-center justify-between">
      <article className="stat_left w-full md:w-[50%] mb-[1em] md:mb-0">
        <Slider />
      </article>

      <article className="stat_right w-full md:w-[45%] grid grid-cols-1 gap-4 justify-content-between">
        <div className="stat_right_top w-full grid grid-cols-2 gap-4">
          {smallCards.map((card) => {
            return (
              <div key={card.id} className="card min-h-[230px]">
                <ul className="py-[2em] px-[1em] flex flex-col items-start justify-between h-full">
                  <li>
                    <Image
                      src={card.iconPath}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      alt="Folder"
                    />
                  </li>
                  <li className="flex flex-col items-start">
                    <span className="font-semibold text-4xl">
                      {card.number}
                    </span>
                    <span className="text-[#686868] text-sm">
                      {card.text}
                    </span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="stat_right_bottom w-full">
          <div className="card flex flex-row justify-between items-center !p-[2em] md:!py-[4em] md:!px-[2em]">
            <h3>Works with:</h3>
            <ul className="flex flex-row justify-between items-center">
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
          </div>
        </div>
      </article>
    </section>
  );
};