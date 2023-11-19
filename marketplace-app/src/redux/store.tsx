import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { CardsStore, cardsReducer } from "./pages/cards/reducer"
import logger from "redux-logger"

export interface AppStore {
    pages: {
        cards: CardsStore
    }
}

export const store = configureStore<AppStore>({
    reducer: combineReducers({
        pages: combineReducers({
            cards: cardsReducer
        })
    }),
    middleware: [...getDefaultMiddleware(), logger] as any
})