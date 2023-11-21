export type Identifier = number | string | undefined


export interface ICard {
    id: Identifier,
    title: string,
    body: string,
    price: number,
    quantity: number,
    img: string,
    quantityBlock: boolean
}

export interface ICart {
    id: Identifier,
    title: string,
    price: number,
    quantity: number,
}