import React from "react"

import { Article } from "../../redux/articles/articlesSlice"
import "../../styles/index.css"
import ArticleCard from "./ArticleCard/ArticleCard"

interface ArticlesGridProps {
  articles: Article[]
}

const ArticlesGrid = (props: ArticlesGridProps) => {
  const { articles } = props

  return (
    <div className="grid grid-cols-4 gap-4">
      { articles.map((article: Article) => {
        return (
          <div key={article.title}>
            <ArticleCard article={article}/>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesGrid
