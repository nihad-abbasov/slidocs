import Link from "next/link";

export const TempDetSidebar = ({ categories }) => {
  return (
    <aside className="w-[30%] sticky top-[15%]">
      <div className="card !shadow-none hover:shadow-none">
        <ul className="flex flex-col justify-center items-start p-10">
          <h5 className="text-lg text-left font-semibold mb-3">
            Other categories
          </h5>
          {categories.map((cate) => {
            return (
              <li
                key={cate.id}
                className="w-full text-left text-base text-slate-80 hover:text-gray-400 font-light py-3 border-b border-gray-400 last:border-b-none transition duration-200"
              >
                <Link href={cate.url}>{cate.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
