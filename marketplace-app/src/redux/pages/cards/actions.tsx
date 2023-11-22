import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICard, Identifier } from "../../types";
import { cardService } from "../../../cardService";

export const getCards = createAsyncThunk<ICard[]>('get items', () => {
    return cardService.getItems() as any
})
export const seeModalWindowAction = createAction<boolean>('see Modal Window')
export const updateCardId = createAction<ICard>('get PostId')
export const plusOneItem = createAction<Identifier>('plus one item')
export const minusOneItem = createAction<Identifier>('minus one item')
export const showQuantity = createAction<Identifier>('show quantity block')
export const hiddenQuantity = createAction<Identifier>('hidden quantity block')
export const deleteCard = createAction<Identifier>('delete card')
export const totalSum = createAction<number>('total sum')
export const totalMinusSum = createAction<number>('minus total sum')
export const deleteAllItemsInCart = createAction<void>('delete all items in cart')
export const searchCards = createAction<string>('search cards')
export const showPromo = createAction<boolean>('show promo')