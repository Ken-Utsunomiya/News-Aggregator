import React, { useEffect } from "react"

import { fetchArticles, selectArticles } from "../redux/articles/articlesSlice"
import ArticlesContainer from "../components/articles/ArticlesContainer"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Home = () => {
  const articles = useAppSelector(selectArticles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles({
      country: "jp",
      q: "chatGPT"
    }))
  }, [])

  return (
    <div>
      <ArticlesContainer articles={articles} />
    </div>
  )
}

export default Home
