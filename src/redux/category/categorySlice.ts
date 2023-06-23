import { createSlice } from "@reduxjs/toolkit"

import { CATEGORIES, DEFAULT_CATEGORY } from "../../constants"

import type { CategoryState } from "../../types/category"
import type { RootState } from "../store"
import type { PayloadAction } from "@reduxjs/toolkit"


const initialState: CategoryState = {
  selectedCategory: DEFAULT_CATEGORY
}

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload
      if (CATEGORIES.includes(category)) {
        state.selectedCategory = category
      } else {
        state.selectedCategory = DEFAULT_CATEGORY
      }
    }
  }
})

const selectCategory = (state: RootState) => state.categoryReducer.selectedCategory

export {
  initialState,
  selectCategory
}

export const {
  setCategory
} = categorySlice.actions

export default categorySlice.reducer