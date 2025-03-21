import classNames from "classnames";
import { LayoutProps } from "./layout.options";

function Layout(props: LayoutProps) {
    return (
        <main className={classNames("w-full h-screen overflow-hidden bg-bgcolor text-white", props.className)}>
            {props.children}
        </main>
    )
}

export default Layout;