"use client";

import { LoginPage } from "../../../components/user/Registration/LoginPage";
import { useLoading } from "../../_customHooks/useLoading";
import { Loading } from "../../../components/layout/Loading/Loading";

export default function Login() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return <LoginPage />;
}
