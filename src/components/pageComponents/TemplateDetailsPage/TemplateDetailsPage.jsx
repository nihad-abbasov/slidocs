import { templateDetails } from "../../../../db";
import Image from "next/image";
import { TempDetSidebar } from "./TempDetSidebar";
import { PlatformsAvailable } from "../../layout/PlatformsAvailable";
import { platforms } from "../../../../db";
import { AccessLinksSection } from "../Homepage/AccessLinksSection/AccessLinksSection";
import { StandoutsSection } from '../Homepage/StandoutsSection/StandoutsSection';
import { OurFeaturesSection } from '../Homepage/OurFeaturesSection/OurFeaturesSection';

const categories = [
  { id: 1, name: "Category 1", url: "http://localhost:8080/" },
  { id: 2, name: "Category 2", url: "http://localhost:8080/" },
  { id: 3, name: "Category 3", url: "http://localhost:8080/" },
  { id: 4, name: "Category 4", url: "http://localhost:8080/" },
  { id: 5, name: "Category 5", url: "http://localhost:8080/" },
  { id: 6, name: "Category 6", url: "http://localhost:8080/" },
  { id: 7, name: "Category 7", url: "http://localhost:8080/" },
  { id: 8, name: "Category 8", url: "http://localhost:8080/" },
];

export const TemplateDetailsPage = ({ template }) => {
  return (
    <section className="mx-auto p-4  flex flex-col justify-between relative">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-2">{template.name}</h1> */}
      <div className="w-full flex flex-row items-center justify-between mb-[3%]">
        <div className="w-[67%]">
          <h1 className="text-5xl font-bold">Name: {template.name}</h1>
          <div className="flex justify-start items-center my-4">
            <p className="text-lg font-semibold bg-blue-100 py-3 px-5 mr-2 rounded-full">
              Price:{" "}
              <span className="text-green-600">
                ${template.price.toFixed(2)}
              </span>
            </p>
            <p className="bg-black text-white text-sm font- my-5 py-3 px-5 rounded-full dark:bg-blue-200 dark:text-blue-800 w-max">
              Available: {template.amountAvailable}
            </p>
          </div>
          <p className="my-4">{template.description}</p>

          {/* <p className="text-sm text-gray-600">Category: {template.category}</p> */}

          {/* <h2 className="text-2xl font-semibold text-gray-800">Features:</h2>
        <ul className="list-disc list-inside my-4">
          {template.features.map((feature, index) => (
            <li key={index} className="ml-4">
              {feature}
            </li>
          ))}
        </ul> */}

          {/* <h2 className="text-2xl font-semibold text-gray-800">Reviews:</h2>
        {template.reviews.map((review, index) => (
          <div key={index} className="border p-4 my-4 rounded shadow">
            <p className="font-bold">{review.user}</p>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
            <p className="italic">"{review.comment}"</p>
          </div>
        ))} */}
          {/*  */}
        </div>
        <div className="w-[30%] grid grid-cols-1 gap-3">
          <div className="card !bg-[#e5e5e5] !shadow-none">
            <ul className="flex flex-row justify-center items-center gap-3">
              {platforms.map((plat) => {
                return (
                  <li key={plat.id}>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto mx-auto"
                      src={plat.imgUrl}
                      alt={plat.name}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="card flex flex-row justify-between py-5 px-3">
            <div>
              <h5>Download Now!</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="w-80%">
              <Image
                src="/download.svg"
                alt="Download"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[80%] lg:w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row items-start justify-between">
        <div className="w-[67%] card !bg-[#e5e5e5] flex justify-center items-center">
          <ul className="grid grid-cols-2 gap-5 w-full py-10">
            {template.imageUrls.map((imgUrl) => (
              <li key={imgUrl.id} className="flex justify-center items-center">
                <Image
                  className="w-full h-full sm:w-[80%] shadow-md mb-4 rounded-3xl"
                  src={imgUrl.url}
                  alt={template.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </li>
            ))}
          </ul>
        </div>
        <TempDetSidebar categories={categories} />
      </div>
      <AccessLinksSection />
    </section>
  );
};
