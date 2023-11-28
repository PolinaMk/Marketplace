import { createAction } from "@reduxjs/toolkit";

export const getTime = createAction<void>('get time')
export const getGreeting = createAction<void>('get greeting')