import { PayloadAction, createReducer } from "@reduxjs/toolkit"
import { seeModalCart } from "./actions"

export interface CartStore {
    cartModal: boolean,
}

const defaultMiniStore: CartStore = {
    cartModal: false,
}

export const cartReducer = createReducer<CartStore>(defaultMiniStore, {
    [seeModalCart.type]: (store, action: PayloadAction<boolean>) => {
        store.cartModal = action.payload
    }
})