import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setArticles } from "../redux/articles/articlesSlice"

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArticles)
  }, [])

  return (
    <div>
      <ul>
        { articles.map((article: any) => {
          return (
            <li key={article.title}>{article.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dashboard
