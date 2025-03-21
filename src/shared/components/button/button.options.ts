import { ButtonHTMLAttributes } from "react"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    content: string | React.ReactNode
}