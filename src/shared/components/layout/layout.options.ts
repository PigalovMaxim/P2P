import { PropsWithChildren } from "react";

export type LayoutProps = PropsWithChildren & Partial<Omit<HTMLDivElement, 'children'>>