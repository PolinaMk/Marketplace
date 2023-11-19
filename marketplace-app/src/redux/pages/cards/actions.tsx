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