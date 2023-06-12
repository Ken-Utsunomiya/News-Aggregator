import React from "react"

import type { Article } from "../../../types/articles"

interface ArticleCardProps {
  article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props

  return (
    <div>
      <img src={ article.urlToImage } />
      <h6>{ article.title }</h6>
    </div>
  )
}

export default ArticleCard
