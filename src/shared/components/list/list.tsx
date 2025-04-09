import InfinityList from "../infinityList";
import PaginationList from "../paginationList";
import { ListProps } from "./list.options";

function List<T>({ itemsInPage, ...props }: ListProps<T>) {
  if (!props.items.length)
    return <div className="w-full h-full flex justify-center items-center font-bold text-xl">Данные отсутствуют</div>

  if (itemsInPage)
    return <PaginationList<T> {...props} itemsInPage={itemsInPage} />;

  if (!props.loadItems || !props.hasMore)
    throw new Error("LoadItems and HasMore is required in infinity list");
  return (
    <InfinityList
      {...props}
      loadItems={props.loadItems}
      hasMore={props.hasMore}
    />
  );
}

export default List;
