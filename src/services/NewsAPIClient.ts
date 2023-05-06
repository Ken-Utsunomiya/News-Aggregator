import axios from "axios"

const newsAPIClient = axios.create({
  baseURL: process.env.REACT_APP_NEWSAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_NEWSAPI_API_KEY}`
  },
  timeout: 2000
})

const getHeadlines = async (category: string, country: string) => {
  const params = {
    category,
    country
  }
  const { data } = await newsAPIClient.get("/top-headlines", { params })
  return data.articles
}

const getNews = async (country: string, q: string) => {
  const params = {
    country,
    q
  }
  const { data } = await newsAPIClient.get("/everything", { params })
  return data.articles
}

export {
  getHeadlines,
  getNews
}