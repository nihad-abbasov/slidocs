"use client";

import { SignUpPage } from "../../../components/user/Registration/SignUpPage";
import { useLoading } from "../../_customHooks/useLoading";
import { Loading } from "../../../components/layout/Loading/Loading";

export default function SignUp() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return <SignUpPage />;
}
