"use client";

import { TemplatesPage } from "../../../components/pageComponents/TemplatesPage/TemplatesPage";
import { useLoading } from '../../_customHooks/useLoading';
import { Loading } from "../../../components/layout/Loading/Loading";

export default function Templates() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return <TemplatesPage />;
}
