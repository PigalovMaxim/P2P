import { AuthFormInputs } from "@widgets/index"
import { FieldError, RegisterOptions, UseFormRegisterReturn } from "react-hook-form"

export type AuthPasswordInputProps = UseFormRegisterReturn & {
    error?: FieldError
}

const minLength = 6;
const maxLength = 100;

export const AuthPasswordInputValidation: RegisterOptions<AuthFormInputs> = {
    required: true,
    minLength,
    maxLength,
}

export const AuthPasswordInputErrors: Partial<Record<keyof RegisterOptions | string, string>> = {
    required: 'Поле логин является обязательным',
    maxLength: `Длина поля должна быть меньше ${maxLength} символов`,
    minLength: `Длина поля должна быть больше ${minLength} символов`
}