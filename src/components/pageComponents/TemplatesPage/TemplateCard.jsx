import Link from "next/link";
import Image from "next/image";

export const TemplateCard = ({ template }) => {
  return (
    <li className="card cursor-pointer">
      <Link
        href={`/template-info/${+template.id}`}
        className="w-[90%] mx-auto px-5 py-7 flex flex-col justify-between items-center gap-3"
      >
        <Image
          src={template.imageUrls[0].url}
          alt={template.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full rounded-[20px]"
        />
        <div className="temp_detailes w-full flex flex-row justify-between items-center">
          <h5>{template.category}</h5>
          <span className="temp_amount bg-black text-white py-2 px-4 rounded-full">
            {template.amountAvailable} Slides
          </span>
        </div>
      </Link>
    </li>
  );
};
