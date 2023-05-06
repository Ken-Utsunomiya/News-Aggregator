import React, { useEffect } from "react"

import { fetchArticles, selectArticles } from "../redux/articles/articlesSlice"
import ArticlesListContainer from "../components/articles/ArticlesListContainer"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Dashboard = () => {
  const articles = useAppSelector(selectArticles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div>
      <ArticlesListContainer />
    </div>
  )
}

export default Dashboard
