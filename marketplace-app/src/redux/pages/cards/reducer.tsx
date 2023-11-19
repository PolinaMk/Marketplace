import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { ICard, Identifier } from "../../types";
import { getCards, minusOneItem, plusOneItem, seeModalWindowAction, updateCardId } from "./actions";

export interface CardsStore {
    cards: ICard[],
    loading: boolean,
    errorMessage?: string,
    modal: boolean,
    cardModal: ICard | null,
    cardId: Identifier | null,
}

type AsyncAction<T = any, M = any> = {
    type: string,
    payload: T,
    meta: M,
    error: Error
}

const defaultMiniStore: CardsStore = {
    cards: [],
    loading: false,
    modal: false,
    cardModal: null,
    cardId: null,
}

export const cardsReducer = createReducer<CardsStore>(defaultMiniStore, {
    [getCards.pending.type]: (store) => {
        store.loading = true
    },
    [getCards.fulfilled.type]: (store, action: PayloadAction<ICard[]>) => {
        store.cards = action.payload
        store.loading = false
    },
    [getCards.rejected.type]: (store, action: AsyncAction) => {
        store.errorMessage = action.error.message
        store.loading = false
    },
    [seeModalWindowAction.type]: (store, action: PayloadAction<boolean>) => {
        store.modal = action.payload
    },
    [updateCardId.type]: (store, action: PayloadAction<ICard>) => {
        store.cardModal = action.payload
    },
    [plusOneItem.type]: (store, action: PayloadAction<Identifier>) => {
        store.cards.map((card) => {
            if (card.id === action.payload) {
                return ++card.quantity
            }
        })
    },
    [minusOneItem.type]: (store, action: PayloadAction<Identifier>) => {
        store.cards.map((card) => {
            if (card.id === action.payload) {
                return --card.quantity
            }
        })
    }
})