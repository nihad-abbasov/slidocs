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
        <h2 className="text-lg font-medium text-center mb-4">{title}</h2>
        <p className="text-xs font-normal text-center tracking-wider mb-6">
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
        <FormBtn>{title}</FormBtn>

        {isLogin && <Suggestion />}
      </Form>
      <DisclaimerText />
    </div>
  );
};
