import Header from "@shared/components/header";
import Icon from "@shared/components/icon";
import Logo from "./assets/logo.svg";
import routes from "@app/routes.json";

function MainHeader() {
  return (
    <Header>
      <Icon src={Logo} href={routes.Home} className="w-10 h-10" />
    </Header>
  );
}

export default MainHeader;
