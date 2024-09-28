


import { configureStore } from "@reduxjs/toolkit";
import LangReducer from "./slice/languageSlice";


export const store = () => {
    return configureStore({
        reducer: {
            Language: LangReducer
        }
    })
};

