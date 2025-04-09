import Layout from "@shared/components/layout";
import HomeMarketplaceList from "@widgets/homeMarketplaceList";
import MainHeader from "@widgets/mainHeader";

function Home() {
  return (
    <Layout>
      <MainHeader />
      <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-center">
        <h1 className="text-2xl mt-5">Добро пожаловать, {"Лёха"}</h1>
        <HomeMarketplaceList />
      </div>
    </Layout>
  );
}

export default Home;
