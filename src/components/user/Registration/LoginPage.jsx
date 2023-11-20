import Image from "next/image";
import { RegisterImageSection } from "./RegisterImageSection";

export const LoginPage = () => {
  return (
    <section className="grid grid-cols-2 gap-5 justify-items-end">
      <div className="form_wrapper w-full">form_wrapper</div>
      <RegisterImageSection />
    </section>
  );
};
