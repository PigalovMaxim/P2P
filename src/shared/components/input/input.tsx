import classNames from "classnames";
import { InputProps } from "./input.options";

function Input({leftIcon, rightIcon, containerClassName,...props}: InputProps) {
  return (
    <div className={classNames('w-full h-10 rounded-sm bg-light-block relative flex flex-row items-center', containerClassName)}>
        {leftIcon && <div className="h-8 w-8 absolute left-1"></div>}
        <input {...props} className={classNames('w-full h-full outline-none px-2', props.className, { 'pl-10': leftIcon, 'pr-10': rightIcon })} />
        {rightIcon && <div className="h-8 w-8 absolute right-1"></div>}
    </div>
  );
}

export default Input;
