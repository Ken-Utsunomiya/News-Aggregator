import React from "react"

import { Article } from "../../redux/articles/articlesSlice"
import ArticlesGrid from "./ArticlesGrid"
import "../../styles/index.css"

interface ArticlesContainerProps {
  articles: Article[]
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles } = props
  
  return (
    <div className="container">
      <ArticlesGrid articles={articles} isHeadline={false} />
    </div>
  )
}

export default ArticlesContainer
