import { templateDetails } from "../../../../db";
import Image from "next/image";

export const TemplateDetailsPage = ({ template }) => {
  return (
    <section className="mx-auto p-4">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-2">{template.name}</h1> */}
      <Image
        className="w-full h-full sm:w-1/2 lg:w-1/3 rounded shadow-md mb-4"
        src={template.imgUrl}
        alt={template.name}
        width={0}
        height={0}
        sizes="100vw"
      />
      <p className="text-sm text-gray-600">Category: {template.category}</p>
      <p className="my-4">{template.description}</p>
      <h2 className="text-2xl font-semibold text-gray-800">Features:</h2>
      <ul className="list-disc list-inside my-4">
        {template.features.map((feature, index) => (
          <li key={index} className="ml-4">
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center my-4">
        <p className="text-lg font-semibold">
          Price:{" "}
          <span className="text-green-600">${template.price.toFixed(2)}</span>
        </p>
        <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          Available: {template.amountAvailable}
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">Reviews:</h2>
      {template.reviews.map((review, index) => (
        <div key={index} className="border p-4 my-4 rounded shadow">
          <p className="font-bold">{review.user}</p>
          <p className="text-yellow-500">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </p>
          <p className="italic">"{review.comment}"</p>
        </div>
      ))}
      <h3 className="text-xl font-semibold text-gray-800">
        Related Templates:
      </h3>
      <ul className="my-4">
        {template.relatedTemplates.map((relatedId, index) => (
          <li key={index} className="ml-4">
            Template ID: {relatedId}
          </li>
        ))}
      </ul>
    </section>
  );
};
