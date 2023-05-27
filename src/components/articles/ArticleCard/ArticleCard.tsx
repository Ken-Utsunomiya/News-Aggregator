import React from "react"

import type { Article } from "../../../types/articles"

interface ArticleCardProps {
  article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={ article.urlToImage } className="h-50 w-15 content-center" />
      <h6>{ article.title }</h6>
    </div>
  )
}

export default ArticleCard
