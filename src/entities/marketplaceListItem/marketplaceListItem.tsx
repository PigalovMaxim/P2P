import MarketplaceListItemContainer from "@entities/marketplaceListItemContainer";
import { MarketPlaceItemProps } from "./marketplaceListItem.options";

function MarketplaceListItem({ item: { id, address, status, title, actions } }: MarketPlaceItemProps) {
  return (
    <MarketplaceListItemContainer
      first={id}
      second={title}
      third={address}
      fourth={status}
      fifth={actions}
      classNamesContainer="border-highlight border h-12"
      classNamesCol="border-highlight border"
    />
  );
}

export default MarketplaceListItem;
