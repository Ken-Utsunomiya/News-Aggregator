import React, { useEffect } from "react"

import { fetchArticles, selectArticles } from "../../redux/articles/articlesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import ArticlesContainer from "./ArticlesContainer"

const ArticlesListContainer = () => {
  const articles = useAppSelector(selectArticles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles({
      country: "jp",
      filter: "chatGPT",
      isHeadline: false
    }))
  }, [])

  return (
    <div>
      <ArticlesContainer articles={articles} />
    </div>
  )
}

export default ArticlesListContainer
