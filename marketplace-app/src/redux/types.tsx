export type Identifier = number | string | undefined


export interface ICard {
    id: Identifier,
    title: string,
    body: string,
    price: number | string,
    quantity: number,
    img: string,
    quantityBlock: boolean
}