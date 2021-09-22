import cardsSlice from "./cardsSlice";
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: { 
        cards : cardsSlice
    },
})