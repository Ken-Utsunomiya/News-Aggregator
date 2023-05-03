import React, { useEffect, useState } from "react"

import { getNews } from "../services/NewsAPIClient"

const Dashboard = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await getNews()
        setArticles(response)
      } catch (error) {
        console.log(error)
      }
    }
    getArticles()
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
