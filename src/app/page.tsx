"use client";

import { Homepage } from "../components/pageComponents/Homepage/Homepage";
import { useLoading } from './_customHooks/useLoading';
import { Loading } from '../components/layout/Loading/Loading';

export default function Home() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return <Homepage />;
}
