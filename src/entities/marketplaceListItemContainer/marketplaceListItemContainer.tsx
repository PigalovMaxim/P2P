import { MarketPlaceItemContainerProps } from "./marketplaceListItemContainer.options";
import cn from 'classnames';

function MarketplaceListItemContainer({
  first,
  second,
  third,
  fourth,
  fifth,
  classNamesCol,
  classNamesContainer
}: MarketPlaceItemContainerProps) {
  return (
    <div className={cn('w-full grid grid-cols-marketplace-grid', classNamesContainer)}>
      <span className={cn('px-2 flex justify-center items-center', classNamesCol)}>{first}</span>
      <span className={cn('px-2 flex justify-center items-center', classNamesCol)}>{second}</span>
      <span className={cn('px-2 flex justify-center items-center', classNamesCol)}>{third}</span>
      <span className={cn('px-2 flex justify-center items-center', classNamesCol)}>{fourth}</span>
      <span className={cn('px-2 flex flex-row gap-x-2 justify-center items-center', classNamesCol)}>
        {fifth}
      </span>
    </div>
  );
}

export default MarketplaceListItemContainer;
