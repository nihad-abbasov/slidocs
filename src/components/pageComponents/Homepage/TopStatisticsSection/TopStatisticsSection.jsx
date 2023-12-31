import Image from "next/image";
import { Slider } from "./Slider";
import { smallCards, platforms } from "../../../../../db";
import { PlatformsAvailable } from '../../../layout/PlatformsAvailable';

export const TopStatisticsSection = () => {
  return (
    <section className="willFadeIn flex flex-col md:flex-row items-stretch justify-between">
      <article className="stat_left w-full md:w-[57%] mb-[1em] md:mb-0">
        <Slider />
      </article>

      <article className="stat_right w-full md:w-[40%] grid grid-cols-1 gap-4 justify-content-between">
        <div className="stat_right_top w-full grid md:grid-cols-2 gap-4">
          {smallCards.map((card) => {
            return (
              <div key={card.id} className="card lg:min-h-[230px]">
                <ul className="lg:py-[2em] px-[1em] grid grid-cols-2 lg:flex lg:flex-col lg:items-start lg:justify-between h-full">
                  <li>
                    <Image
                      src={card.iconPath}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[55%] h-full lg:w-full lg:h-full"
                      alt="Folder"
                    />
                  </li>
                  <li className="w-full flex flex-col items-start justify-center">
                    <span className="font-semibold text-4xl">
                      {card.number}
                    </span>
                    <span className="text-[#686868] text-sm">{card.text}</span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="stat_right_bottom w-full">
          <div className="card flex flex-row justify-start items-center gap-5 h-full !p-[2em] md:!py-[4em] md:!px-[2em]">
            <h3>Works with:</h3>
            <PlatformsAvailable />
          </div>
        </div>
      </article>
    </section>
  );
};
