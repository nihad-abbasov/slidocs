import { StandoutCard } from "./StandoutCard";
import { standouts } from "../../../../../db";

export const Standouts = () => {
  return (
    <section>
      <article>
        <h2 className="font-semibold text-4xl text-center lg:text-left mb-[1em]">
          We Stand Out
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-[250px]">
          {standouts.map((st) => {
            return <StandoutCard standout={st} />;
          })}
        </ul>
      </article>
    </section>
  );
};
