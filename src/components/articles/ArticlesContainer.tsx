import React from "react"

import ArticlesGrid from "./ArticlesGrid"

import type { Article } from "../../types/articles"

interface ArticlesContainerProps {
  articles: Article[]
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles } = props
  console.log(articles)
  
  return (
    <div>
      <ArticlesGrid articles={articles} isHeadline={false} />
    </div>
  )
}

export default ArticlesContainer
