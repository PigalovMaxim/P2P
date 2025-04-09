import { ListProps } from "../list";

export type PaginationListProps<T> = Required<Pick<ListProps<T>, 'items' | 'itemComponent' | 'itemsInPage'>>;