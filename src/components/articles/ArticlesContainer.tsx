import React from "react"

import { Article } from "../../redux/articles/articlesSlice"

interface ArticlesContainerProps {
  articles: Article[]
  category: string
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles, category } = props
  return (
    <div>
      <h2>{ category }</h2>
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
