"use client";

import { TemplateDetailsPage } from "../../../../components/pageComponents/TemplateDetailsPage/TemplateDetailsPage";
import { templateDetails } from "../../../../../db";

export default function TemplateDetails({ params }: any) {
  const template = templateDetails.find((temp) => temp.id == params.id);

  return <TemplateDetailsPage template={template} />;
}
