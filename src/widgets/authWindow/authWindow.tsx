import AuthLoginInput, { AuthLoginInputValidation } from "@features/components/authLoginInput"
import AuthPasswordInput from "@features/components/authPasswordInput"
import { useForm } from "react-hook-form"
import { AuthFormInputs } from "./authWindow.options"
import AuthSubmitButton from "@features/components/authSubmitButton/authSubmitButton"
import authSubmit from "@features/actions/authSubmit"
import { AuthPasswordInputValidation } from "@features/components/authPasswordInput/authPasswordInput.options"

function authWindow() {
  const form = useForm<AuthFormInputs>()

  return (
    <form className="bg-block w-96 p-4 rounded-lg flex flex-col justify-center items-center">
      <h2 className="mb-2">Авторизация</h2>
      <AuthLoginInput {...form.register('login', AuthLoginInputValidation)} error={form.formState.errors.login} />
      <AuthPasswordInput {...form.register('password', AuthPasswordInputValidation)} error={form.formState.errors.password} />
      <AuthSubmitButton onSubmit={form.handleSubmit(authSubmit)} />
    </form>
  )
}

export default authWindow
