import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { CardsStore, cardsReducer } from "./pages/cards/reducer"
import logger from "redux-logger"
import { CartStore, cartReducer } from "./pages/cart/reducer"
import { ContactsStore, contactsReducer } from "./pages/contacts/reducer"

export interface AppStore {
    pages: {
        cards: CardsStore,
        cart: CartStore,
        contacts: ContactsStore
    }
}

export const store = configureStore<AppStore>({
    reducer: combineReducers({
        pages: combineReducers({
            cards: cardsReducer,
            cart: cartReducer,
            contacts: contactsReducer
        })
    }),
    middleware: [...getDefaultMiddleware(), logger] as any
})