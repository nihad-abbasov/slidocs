"use client";

import { textRoutes } from "../../../../../db";
import { ContentLayout } from "../../../../components/layout/ContentLayout/ContentLayout";
import { NotFound } from "../../../../components/layout/NotFound/NotFound";
import { useLoading } from "../../../_customHooks/useLoading";
import { Loading } from "../../../../components/layout/Loading/Loading";

export default function Content({ params }) {
  const isLoading = useLoading();

  const currentRoute = textRoutes.find(
    (route) => route.url === `/${params.contentName}`
  );

  if (!currentRoute) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <ContentLayout currentRoute={currentRoute} />;
}
