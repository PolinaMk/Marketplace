import { PayloadAction, createReducer } from "@reduxjs/toolkit"
import { addToCart, seeModalCart } from "./actions"
import { ICard, ICart } from "../../types"

export interface CartStore {
    cart: ICard[] | []
    cartModal: boolean,
}

const defaultMiniStore: CartStore = {
    cart: [],
    cartModal: false,
}

export const cartReducer = createReducer<CartStore>(defaultMiniStore, {
    [seeModalCart.type]: (store, action: PayloadAction<boolean>) => {
        store.cartModal = action.payload
    },
    [addToCart.type]: (store, action: PayloadAction<ICard>) => {
        store.cart = [...store.cart, action.payload]
    }
})