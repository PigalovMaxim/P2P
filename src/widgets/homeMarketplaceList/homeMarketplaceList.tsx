import MarketplaceListItem, {
  MarketplaceItemType,
} from "@entities/marketplaceListItem";
import { MarketplaceItemStatus } from "@entities/marketplaceListItem";
import MarketplaceListItemContainer from "@entities/marketplaceListItemContainer";
import List from "@shared/components/list";

function HomeMarketplaceList() {
  const data = [
    {
      id: 1,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 2,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.STOPPED,
      actions: <></>,
    },
    {
      id: 3,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 4,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 5,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 6,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 7,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 8,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 9,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 10,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 11,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 12,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
    {
      id: 14,
      title: "test1",
      address: "testaddress1",
      status: MarketplaceItemStatus.ACTIVE,
      actions: <></>,
    },
  ];

  return (
    <div className="w-full px-8 mt-4">
      <div className="w-full px-4 bg-block py-4 rounded-xl shadow-xl">
        <MarketplaceListItemContainer
          first="ID"
          second="Название"
          third="Адрес"
          fourth="Статус"
          fifth="Действия"
          classNamesCol="font-bold"
        />
        <div className="w-full mt-2 h-marketplace-list-max-height">
          <List<MarketplaceItemType>
            itemComponent={MarketplaceListItem}
            items={data}
            itemsInPage={5}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMarketplaceList;
