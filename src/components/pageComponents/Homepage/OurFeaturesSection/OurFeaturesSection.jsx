import { features } from "../../../../../db";

export const OurFeaturesSection = () => {
  return (
    <section className="willFadeIn flex flex-col items-center justify-between !mt-[10%]">
      <h6 className="mb-[15px] text-2xl font-bold text-center">
        Ready to Level Up?
      </h6>
      <p className="mb-[6%] font-extralight text-center">
        Explore the library, find the perfect slides and collect your deck
        faster and easier
      </p>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <div className="feature_img_wrapper bg-[url('/feature.webp')] bg-contain bg-no-repeat bg-center min-h-[250px] w-full"></div>
        <ul className="flex flex-col items-start justify-between w-full">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex flex-row items-start justify-start gap-5 mb-[8%] last:mb-0"
            >
              <div className="feature_icon bg-[url('/check.png')] bg-contain bg-no-repeat bg-center w-[70px] h-[70px] lg:w-[50px] lg:h-[50px] mt-[5px]"></div>
              <div className="feature_info">
                <h6 className="text-lg font-bold mb-[10px]">{feature.name}</h6>
                <p className="text-sm font-extralight w-[90%] lg:w-[60%] text-justify">
                  {feature.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
