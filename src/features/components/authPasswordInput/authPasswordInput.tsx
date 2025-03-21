import Input from "@shared/components/input";
import { AuthPasswordInputErrors, AuthPasswordInputProps } from "./authPasswordInput.options";

function AuthPasswordInput({error, ...props}: AuthPasswordInputProps) {
  return (
    <>
      <Input placeholder="Пароль" containerClassName="mb-2" {...props}/>
      {error && <span className="w-full mb-2 text-red-400">{AuthPasswordInputErrors[error.type]}</span>}
    </>
  );
}

export default AuthPasswordInput;
