import { ListProps } from "../list";

export type InfinityListProps<T> = Required<Pick<ListProps<T>, 'items' | 'itemComponent' | 'loadItems' | 'hasMore'>>;