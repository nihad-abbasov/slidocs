import Image from "next/image";
import { RegisterImageSection } from "./registerComponents/RegisterImageSection";
import { FormSection } from "./registerComponents/FormSection";

export const LoginPage = () => {
  return (
    <section className="login willFadeIn grid grid-cols-2 gap-5 justify-items-end">
      <FormSection isLogin={true} />
      <RegisterImageSection />
    </section>
  );
};
