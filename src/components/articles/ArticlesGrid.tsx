import React from "react"

import { Article } from "../../redux/articles/articlesSlice"
import "../../styles/ArticlesGrid.module.css"

interface ArticlesGridProps {
  articles: Article[]
}

const ArticlesGrid = (props: ArticlesGridProps) => {
  const { articles } = props

  return (
    <div className="grid grid-cols-4 gap-4">
      { articles.map((article: Article) => {
        return (
          <div key={article.title} className="col-span-1">
            <img src={article.urlToImage} className="h-2 w-2" />
          </div>
        )
      })}
    </div>
  )
}


export default ArticlesGrid
