import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getNews } from "../../services/NewsAPIClient"

import { initialArticle } from "./shared"

import type { Article, ArticlesState } from "../../types/articles"
import type { RootState } from "../store"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: ArticlesState = {
  articles: [] as Article[],
  selectedArticle: initialArticle,
  loading: false,
  error: ""
}

const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ language, q }: { language: string, q: string }) => {
    const articles = await getNews(language, q)
    return articles
  }
)

const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false
        state.articles = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

const selectArticles = (state: RootState) => state.articlesReducer.articles

export { 
  fetchArticles,
  selectArticles
}

export const {
  setArticles
} = articlesSlice.actions

export default articlesSlice.reducer
