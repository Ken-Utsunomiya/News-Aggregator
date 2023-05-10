import React, { useEffect } from "react"

import { fetchArticles, selectArticles } from "../../redux/articles/articlesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import ArticlesContainer from "./ArticlesContainer"

const ArticlesListContainer = () => {
  const articles = useAppSelector(selectArticles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles({
      country: "en",
      filter: "chatGPT",
      isHeadline: false
    }))
    console.log("dispatch called")
  }, [])

  return (
    <div>
      <ArticlesContainer articles={articles} />
    </div>
  )
}

export default ArticlesListContainer
