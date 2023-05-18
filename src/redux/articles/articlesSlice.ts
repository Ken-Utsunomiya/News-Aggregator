import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getHeadline, getNews } from "../../services/NewsAPIClient"
import { RootState } from "../store"
import { Article, ArticlesState } from "../../types/articles"
import { initialArticle } from "./shared"

const initialState: ArticlesState = {
  articles: [] as Article[],
  selectedArticle: initialArticle,
  loading: false,
  error: ""
}

const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ country, filter, isHeadline }: { country: string, filter: string, isHeadline: boolean }) => {
    let articles: Article[]
    if (isHeadline) {
      articles = await getHeadline(filter, country)
    } else {
      articles = await getNews(country, filter)
    }
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
