import React from "react"

import { Article } from "../../redux/articles/articlesSlice"
import ArticlesGrid from "./ArticlesGrid"

interface ArticlesContainerProps {
  articles: Article[]
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles } = props
  return (
    <div className="container">
      <ArticlesGrid articles={articles} />
    </div>
  )
}

export default ArticlesContainer
