import Image from "next/image";

export const StandoutCard = ({ standout }) => {
  return (
    <li
      key={standout.id}
      className="card flex flex-col justify-between items-start !p-12"
    >
      <Image
        src={standout.iconPath}
        alt={standout.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[18%] h-auto mb-4"
      />
      <h6 className="font-extralight text-base mb-4">{standout.name}</h6>
      <p className="font-bold tracking-wide">{standout.description}</p>
    </li>
  );
};
