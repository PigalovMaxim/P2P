import { Link } from "react-router-dom";
import { IconProps } from "./icon.options";

function Icon({ height, width, href, ...props }: IconProps) {
  if (href) {
    return (
      <Link to={href}>
        <img {...props} height={height} width={width} />
      </Link>
    );
  }
  return <img {...props} height={height} width={width} />;
}

export default Icon;
