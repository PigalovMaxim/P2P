import classNames from "classnames";
import { ButtonProps } from "./button.options";

function Button({content, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      className={
        classNames('w-full h-10 rounded-sm bg-light-block p-2 disabled:opacity-50 cursor-pointer',
        props.className
      )}
    >
        {content}
    </button>
  );
}

export default Button;
