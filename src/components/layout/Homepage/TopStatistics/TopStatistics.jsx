import Image from "next/image";
import { Slider } from "./Slider";

const platforms = [
  { id: 1, name: "Figma", imgUrl: "/platform.svg", bgColor: "blue" },
  { id: 2, name: "Sketch", imgUrl: "/platform.svg", bgColor: "lightgray" },
  { id: 3, name: "AdobeXD", imgUrl: "/platform.svg", bgColor: "lightgray" },
];

export const TopStatistics = () => {
  return (
    <section className="flex flex-row items-center justify-between">
      <article className="stat_left w-[60%]">
        <Slider />
      </article>

      <article className="stat_right w-[35%] flex flex-col items-center justify-between">
        <div className="stat_right_top w-full flex flex-row items-center justify-between">
          <div className="card">
            <ul>
              <li>
                <Image
                  src="/folder.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[50%] h-auto"
                  alt="Folder"
                />
              </li>
              <li>25</li>
              <li>Unique slides in library</li>
            </ul>
          </div>

          <div className="card">
            <ul>
              <li>
                <Image
                  src="/categories.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[50%] h-auto"
                  alt="Categories"
                />
              </li>
              <li>6</li>
              <li>Slide categories</li>
            </ul>
          </div>
        </div>

        <div className="stat_right_bottom w-full">
          <div className="card flex flex-row justify-between items-center p-96">
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
