import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { CardsStore, cardsReducer } from "./pages/cards/reducer"
import logger from "redux-logger"
import { CartStore, cartReducer } from "./pages/cart/reducer"

export interface AppStore {
    pages: {
        cards: CardsStore,
        cart: CartStore
    }
}

export const store = configureStore<AppStore>({
    reducer: combineReducers({
        pages: combineReducers({
            cards: cardsReducer,
            cart: cartReducer
        })
    }),
    middleware: [...getDefaultMiddleware(), logger] as any
})