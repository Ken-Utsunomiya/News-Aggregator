import React from "react"

import ArticlesGrid from "./ArticlesGrid"

import type { Article } from "../../types/articles"

import "../../styles/index.css"

interface ArticlesContainerProps {
  articles: Article[]
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles } = props
  console.log(articles)
  
  return (
    <div className="container">
      <ArticlesGrid articles={articles} isHeadline={false} />
    </div>
  )
}

export default ArticlesContainer
