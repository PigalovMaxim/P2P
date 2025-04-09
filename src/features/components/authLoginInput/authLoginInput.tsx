import Input from "@shared/components/input";
import { AuthLoginInputErrors, AuthLoginInputProps } from "./authLoginInput.options";

function AuthLoginInput({error, ...props}: AuthLoginInputProps) {
  return (
    <>
      <Input placeholder="Логин" containerClassName="mb-2" {...props}/>
      {error && <span className="w-full mb-2 text-red-400">{AuthLoginInputErrors[error.type]}</span>}
    </>
  );
}

export default AuthLoginInput;
