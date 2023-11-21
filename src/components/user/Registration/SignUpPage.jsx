import Image from "next/image";
import { RegisterImageSection } from "./registerComponents/RegisterImageSection";
import { FormSection } from "./registerComponents/FormSection";

export const SignUpPage = () => {
  return (
    <section className="signUp willFadeIn grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-end">
      <FormSection isLogin={false} />
      <RegisterImageSection />
    </section>
  );
};
