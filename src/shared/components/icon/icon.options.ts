import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import routes from '@app/routes.json';

export type IconProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    height?: number,
    width?: number,
    href?: typeof routes[keyof typeof routes]
}