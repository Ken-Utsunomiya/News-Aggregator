import React from "react"

import ArticleCard from "./ArticleCard/ArticleCard"

import type { Article } from "../../types/articles"

interface ArticlesGridProps {
  articles: Article[]
}

const ArticlesGrid = (props: ArticlesGridProps) => {
  const { articles } = props

  return (
    <div>
      { articles.map((article: Article, index: number) => {
        return (
          <div key={index}>
            <ArticleCard article={article}/>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesGrid
