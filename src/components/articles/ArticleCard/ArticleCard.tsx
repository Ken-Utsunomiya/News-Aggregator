import React from "react"

import { Article } from "../../../redux/articles/articlesSlice"

interface ArticleCardProps {
  article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props

  return (
    <div className="col-span-1">
      <img src={article.urlToImage} className="h-100 w-200" />
      <p>{ article.title }</p>
    </div>
  )
}

export default ArticleCard
