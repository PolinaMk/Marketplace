import { createReducer } from "@reduxjs/toolkit";
import { getGreeting, getTime } from "./actions";

const date = new Date();
const hours = date.getHours();
function getTimeOfDay() {
        if (hours >= (6) && hours < (12)) {
            return 'morning';
        } else if (hours >= (12) && hours < (18)) {
            return 'afternoon';
        } else if (hours >= (18) && hours < (24)) {
            return 'evening';
        } else if (hours >= (24) && hours < (6)){
            return 'night';
        }
}

export interface ContactsStore {
    time: any,
    greetingText: string
}
const defaultMiniStore: ContactsStore = {
    time: 0,
    greetingText: ''
}

export const contactsReducer = createReducer<ContactsStore>(defaultMiniStore, {
    [getTime.type]: (store) => {
        const date = new Date();
        store.time = date.toLocaleTimeString();
    },
    [getGreeting.type]: (store) => {
        const timeOfDay = getTimeOfDay();
        store.greetingText = `Good ${timeOfDay}!`;
    }
})