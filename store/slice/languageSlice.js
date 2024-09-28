

import selectLanguages from "@/app/setLanguage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    dictionary: "fa",
    SystemLanguage: {}
};




export const fetchLang = createAsyncThunk("LanguageApp/fetchLanguage", async (lang) => {
    const result = await selectLanguages(lang);
    return result;
})


export const languageSlice = createSlice({
    name: "LanguageApp",
    initialState,
    reducers: {
        setlanguage(state, action) {
            state.dictionary = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLang.fulfilled, (state, action) => {
                state.SystemLanguage = action.payload
            })
    }
});


export const { setlanguage } = languageSlice.actions;

// selectors

// select dictionary
export const selectDictionary = (state) => state.Language.dictionary
// System Language
export const selectSystemLanguage = (state) => state.Language?.SystemLanguage;


export default languageSlice.reducer;