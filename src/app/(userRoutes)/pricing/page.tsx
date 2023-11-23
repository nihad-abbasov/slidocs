"use client";

import { PricingPage } from "../../../components/pageComponents/PricingPage/PricingPage";
import { useLoading } from "../../_customHooks/useLoading";
import { Loading } from "../../../components/layout/Loading/Loading";

export default function Pricing() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }
  return <PricingPage />;
}
