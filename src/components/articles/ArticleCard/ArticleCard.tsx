import React from "react"

import { Article } from "../../../redux/articles/articlesSlice"

interface ArticleCardProps {
  article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={article.urlToImage} className="h-50 w-150 content-center" />
      <p>{ article.title }</p>
    </div>
  )
}

export default ArticleCard
