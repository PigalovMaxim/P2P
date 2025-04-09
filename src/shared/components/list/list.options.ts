type Item<T> = T & { id: number } 

export type ListProps<T> = {
    items: Item<T>[],
    itemsInPage?: number,
    itemComponent: React.ComponentType<{ item: Item<T> }>,
    loadItems?: () => void, 
    hasMore?: boolean,
}