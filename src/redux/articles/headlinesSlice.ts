import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getHeadline } from "../../services/NewsAPIClient"

import { initialArticle } from "./shared"

import type { HeadlinesState } from "../../types/articles"
import type { RootState } from "../store"

const initialState: HeadlinesState = {
  headlines: {},
  selectedArticle: initialArticle,
  loading: false,
  error: ""
}

const fetchHeadline = createAsyncThunk(
  "articles/fetchHeadline",
  async ({ category, country }: { category: string, country: string }) => {
    const headline = await getHeadline(category, country)
    return { category, headline }
  }
)

const headlinesSlice = createSlice({
  name: "headlines",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeadline.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchHeadline.fulfilled, (state, action) => {
        const { category, headline } = action.payload
        state.loading = false
        state.headlines = { ...state.headlines, [category]: headline }
      })
      .addCase(fetchHeadline.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

const selectHeadlines = (state: RootState) => state.headlinesReducer.headlines

export { 
  fetchHeadline,
  initialState,
  selectHeadlines
}

export default headlinesSlice.reducer
