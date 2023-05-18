import axios from "axios"
import { DEFAULT_PAGE_SIZE } from "./constants"

const pageSize = DEFAULT_PAGE_SIZE

const newsAPIClient = axios.create({
  baseURL: process.env.REACT_APP_NEWSAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_NEWSAPI_API_KEY}`
  },
  timeout: 2000
})

const getHeadline = async (category: string, country: string) => {
  const params = {
    category,
    country,
    pageSize
  }
  const { data } = await newsAPIClient.get("/top-headlines", { params })
  return data.articles
}

const getNews = async (language: string, q: string) => {
  const params = {
    language,
    q,
    pageSize
  }
  const { data } = await newsAPIClient.get("/everything", { params })
  return data.articles
}

export {
  getHeadline,
  getNews
}