import { createSlice } from "@reduxjs/toolkit"

import type { CategoryState } from "../../types/category"
import type { RootState } from "../store"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: CategoryState = {
  selectedCategory: ""
}

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
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