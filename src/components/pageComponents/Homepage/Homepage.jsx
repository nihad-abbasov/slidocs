import { TopStatistics } from "./TopStatistics/TopStatistics";
import { Templates } from "./Templates/Templates";
import { Standouts } from "./Standouts/Standouts";
import { AccessLinks } from "./AccessLinks/AccessLinks";
import { Informational } from "./Informational/Informational";
import { OurFeatures } from "./OurFeatures/OurFeatures";

export const Homepage = () => {
  return (
    <>
      <TopStatistics />
      <Templates />
      <Informational />
      <Standouts />
      <AccessLinks />
      <OurFeatures />
    </>
  );
};
