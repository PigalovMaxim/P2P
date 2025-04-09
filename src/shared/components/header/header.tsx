import classNames from "classnames";
import { HeaderProps } from "./header.options";

function Header({ children, ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={classNames(
        "w-full h-14 bg-block shadow-xl flex flex-row justify-between items-center px-4",
        props.className
      )}
    >
        {children}
    </header>
  );
}

export default Header;
