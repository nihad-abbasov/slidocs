import { TopStatisticsSection } from "./TopStatisticsSection/TopStatisticsSection";
import { TemplatesSection } from "./TemplatesSection/TemplatesSection";
import { StandoutsSection } from "./StandoutsSection/StandoutsSection";
import { AccessLinksSection } from "./AccessLinksSection/AccessLinksSection";
import { InformationalSection } from "./InformationalSection/InformationalSection";
import { OurFeaturesSection } from "./OurFeaturesSection/OurFeaturesSection";

export const Homepage = () => {
  return (
    <>
      <TopStatisticsSection />
      <TemplatesSection />
      <InformationalSection />
      <StandoutsSection />
      <AccessLinksSection />
      <OurFeaturesSection />
    </>
  );
};