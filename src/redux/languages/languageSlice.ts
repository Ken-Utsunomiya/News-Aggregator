import { createSlice } from "@reduxjs/toolkit"

import type { LanguageState } from "../../types/language"
import type { RootState } from "../store"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: LanguageState = {
  selectedLanguage: "en"
}

const languagSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload
    }
  }
})

const selectLanguage = (state: RootState) => state.languageReducer.selectedLanguage

export {
  selectLanguage
}

export const {
  setLanguage
} = languagSlice.actions

export default languagSlice.reducer
