import React from "react"

import ArticleCard from "./ArticleCard/ArticleCard"

import type { Article } from "../../types/articles"


import "../../styles/index.css"

interface ArticlesGridProps {
  articles: Article[]
  isHeadline: boolean
}

const ArticlesGrid = (props: ArticlesGridProps) => {
  const { articles } = props

  return (
    <div className="flex flex-row overflow-x-auto">
      { articles.map((article: Article, index: number) => {
        return (
          <div key={index} className="px-4 py-2 bg-gray-200 rounded-lg mx-2 whitespace-nowrap">
            <ArticleCard article={article}/>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesGrid
