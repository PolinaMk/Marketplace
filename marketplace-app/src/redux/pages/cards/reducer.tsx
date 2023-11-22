import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { ICard, Identifier } from "../../types";
import { deleteAllItemsInCart, deleteCard, getCards, hiddenQuantity, minusOneItem, plusOneItem, searchCards, seeModalWindowAction, showPromo, showQuantity, totalMinusSum, totalSum, updateCardId } from "./actions";

export interface CardsStore {
    cards: ICard[],
    loading: boolean,
    errorMessage?: string,
    modal: boolean,
    cardModal: ICard | null,
    cardId: Identifier | null,
    totalSum: number,
    promoShow: boolean,
    filteredCards: ICard[] | []
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
    totalSum: 0,
    promoShow: true,
    filteredCards: []
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
    },
    [showQuantity.type]: (store, action: PayloadAction<Identifier>) => {
        store.cards.map((card) => {
            if (card.id === action.payload) {
                card.quantityBlock = true
            }
        })
    },
    [hiddenQuantity.type]: (store, action: PayloadAction<Identifier>) => {
        store.cards.map((card) => {
            if (card.id === action.payload) {
                if (card.quantity === 0) {
                    card.quantityBlock = false
                    card.quantity = 1
                }
            }
        })
    },
    [deleteCard.type]: (store, action: PayloadAction<Identifier>) => {
        store.cards.map((card) => {
            if (card.id === action.payload) {
                card.quantityBlock = false
                card.quantity = 1
            }
        })
    },
    [totalSum.type]: (store, action: PayloadAction<number>) => {
        store.totalSum = store.totalSum + action.payload
    },
    [totalMinusSum.type]: (store, action: PayloadAction<number>) => {
        store.totalSum = store.totalSum - action.payload
    },
    [deleteAllItemsInCart.type]: (store) => {
        store.totalSum = 0
        store.cards.map((card) => {
            card.quantityBlock = false
            card.quantity = 1
        })
    },
    [searchCards.type]: (store, action: PayloadAction<string>) => {
        store.filteredCards = store.cards.filter(card => card.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
    [showPromo.type]: (store, action: PayloadAction<boolean>) => {
        store.promoShow = action.payload
    }
})