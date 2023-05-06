import React, { useEffect } from "react"
import { Article, fetchArticles, selectArticles } from "../redux/articles/articlesSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Dashboard = () => {
  const articles = useAppSelector(selectArticles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div>
      <ul>
        { articles.map((article: Article) => {
          return (
            <li key={article.title}>{article.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dashboard
