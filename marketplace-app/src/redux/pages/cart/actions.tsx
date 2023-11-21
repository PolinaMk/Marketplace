import { createAction } from "@reduxjs/toolkit";
import { ICard } from "../../types";

export const seeModalCart = createAction<boolean>('see Modal Cart')
export const addToCart = createAction<ICard>('add card to cart')