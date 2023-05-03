import axios from "axios"

const newsAPIClient = axios.create({
  baseURL: process.env.REACT_APP_NEWSAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_NEWSAPI_API_KEY}`
  },
  timeout: 2000
})

const getNews = async () => {
  const { data } = await newsAPIClient.get("/everything?q=chatGPT")
  return data.articles
}

export {
  getNews
}