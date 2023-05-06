import React from "react"

import { Article } from "../../redux/articles/articlesSlice"

interface ArticlesContainerProps {
  articles: Article[]
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles } = props
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

export default ArticlesContainer
