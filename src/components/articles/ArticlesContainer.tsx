import React from "react"

import ArticlesGrid from "./ArticlesGrid"

import type { Article } from "../../types/articles"

interface ArticlesContainerProps {
  articles: Article[],
  genre: string
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
  const { articles, genre } = props
  
  return (
    <div>
      <h3>{ genre }</h3>
      <ArticlesGrid articles={articles} isHeadline={false} />
    </div>
  )
}

export default ArticlesContainer
