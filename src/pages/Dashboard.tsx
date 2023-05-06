import React, { useEffect } from "react"
import { fetchArticles, selectArticles } from "../redux/articles/articlesSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import ArticlesContainer from "../components/articles/ArticlesContainer"

const Dashboard = () => {
  const articles = useAppSelector(selectArticles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div>
      <ArticlesContainer articles={articles} />
    </div>
  )
}

export default Dashboard
