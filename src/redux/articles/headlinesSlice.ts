import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getHeadline } from "../../services/NewsAPIClient"
import { RootState } from "../store"
import { Article, HeadlinesState } from "../../types/articles"

const INITIAL_ARTICLE: Article = {
  source: "",
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: ""
}

const INITIAL_STATE: HeadlinesState = {
  headlines: {},
  selectedArticle: INITIAL_ARTICLE,
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
  initialState: INITIAL_STATE,
  reducers: {
    setHeadline: (state, action: PayloadAction<{ category: string, headline: Article[] }>) => {
      const { category, headline } = action.payload
      state.headlines = { ...state.headlines, [category]: headline }
    }
  },
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
  selectHeadlines
}

export const {
  setHeadline
} = headlinesSlice.actions

export default headlinesSlice.reducer