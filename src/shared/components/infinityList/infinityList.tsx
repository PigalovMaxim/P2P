import InfiniteScroll from "react-infinite-scroll-component";
import { InfinityListProps } from "./infinityList.options";

function InfinityList<T>({
  itemComponent: ItemComponent,
  items,
  loadItems,
  hasMore,
}: InfinityListProps<T>) {
  return (
    <div id="scrollableDiv" className="w-full h-full flex flex-col justify-start items-center overflow-y-auto">
      <InfiniteScroll
        dataLength={items.length}
        next={loadItems}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {items.map((item) => (
          <ItemComponent item={item} key={item.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default InfinityList;
