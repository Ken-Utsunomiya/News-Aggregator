import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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

const INITIAL_ARTICLE = {
  source: null,
  author: null,
  title: null,
  description: null,
  url: null,
  urlToImage: null,
  publishedAt: null,
  content: null
}

const INITIAL_STATE = {
  articles: [],
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
    setArticles: (state, action) => {
      state.articles = action.payload
    }
  }
})

const selectArticles = (state: RootState) => state.articles

export { 
  fetchArticles,
  selectArticles 
}

export const {
  setArticles
} = articlesSlice.actions

export default articlesSlice.reducer
