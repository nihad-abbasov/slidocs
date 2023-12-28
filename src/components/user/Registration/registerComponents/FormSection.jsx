import { Form } from "./Form";
import { DisclaimerText } from "./DisclaimerText";
import { FormBtn } from "./FormBtn";
import { Input } from "./Input";
import { Suggestion } from "./Suggestion";

export const FormSection = ({ isLogin }) => {
  const title = isLogin ? "Login" : "Sign Up";

  return (
    <div className="form_wrapper w-full flex flex-col items-center justify-around">
      <header>
        <h2 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">
          {title}
        </h2>
        <p className="text-sm font-normal text-center tracking-wide mb-6 text-black dark:text-white">
          We suggest using the email adress you use at work
        </p>
      </header>
      <Form>
        {!isLogin && (
          <>
            <Input
              inputData={{
                type: "text",
                name: "Name",
                placeholder: "Name",
              }}
            />
            <Input
              inputData={{
                type: "text",
                name: "Surname",
                placeholder: "Surname",
              }}
            />
          </>
        )}
        <Input
          inputData={{ type: "email", name: "Email", placeholder: "Email" }}
        />
        <Input
          inputData={{
            type: "password",
            name: "Password",
            placeholder: "••••••••",
          }}
        />
        {!isLogin && (
          <>
            <Input
              inputData={{
                type: "password",
                name: "Confirm Password",
                placeholder: "••••••••",
              }}
            />
          </>
        )}
        {isLogin && (
          <div className="my-3 w-full flex flex-row justify-between items-center">
            <fieldset className="flex flex-row justify-between items-center gap-1">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </fieldset>
            <fieldset className="text-sm hover:underline cursor-pointer">Forgot Password?</fieldset>
          </div>
        )}
        <FormBtn>{title}</FormBtn>

        {isLogin && <Suggestion />}
      </Form>
      <DisclaimerText />
    </div>
  );
};
