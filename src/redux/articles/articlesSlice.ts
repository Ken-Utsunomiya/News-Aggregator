import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getNews } from "../../services/NewsAPIClient"
import { RootState } from "../store"

export interface Article {
  source: string
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface ArticlesState {
  articles: Article[]
  selectedArticle: Article
  loading: boolean
  error: string | null
}

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

const INITIAL_STATE: ArticlesState = {
  articles: [] as Article[],
  selectedArticle: INITIAL_ARTICLE,
  loading: false,
  error: null
}

const fetchArticles = createAsyncThunk("articles/fetchArticles", async () => {
  const articles = await getNews()
  return articles
})

const articlesSlice = createSlice({
  name: "articles",
  initialState: INITIAL_STATE,
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
