export enum MarketplaceItemStatus {
    ACTIVE = 'Активна',
    STOPPED = 'Заморожена'
} 

export type MarketplaceItemType = {
    id: number,
    title: string,
    address: string,
    status: MarketplaceItemStatus,
    actions: React.ReactNode
    isHeader?: boolean
}

export type MarketPlaceItemProps = { item: MarketplaceItemType }