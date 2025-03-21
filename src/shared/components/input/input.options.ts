import { InputHTMLAttributes } from "react"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    containerClassName?: string
}