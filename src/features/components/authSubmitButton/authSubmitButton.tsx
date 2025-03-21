import Button from "@shared/components/button";
import { SubmitButtonProps } from "./authSubmitButton.options";
import { MouseEvent, useState } from "react";

function AuthSubmitButton(props: SubmitButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await props.onSubmit();
    setIsLoading(false);
  }

  return (
    <Button
      content={isLoading ? 'Загрузка' :'Авторизоваться'}
      disabled={isLoading}
      onClick={onSubmit}
    />
  );
}

export default AuthSubmitButton;
