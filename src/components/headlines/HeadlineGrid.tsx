import React from "react"

import ArticleCard from "../articles/ArticleCard/ArticleCard"

import type { Article } from "../../types/articles"

interface HeadlineGridProps {
  headline: Article[]
}

const HeadlineGrid = (props: HeadlineGridProps) => {
  const { headline } = props

  return (
    <div className="flex flex-row overflow-x-auto">
      { headline.map((article: Article, index: number) => {
        return (
          <div key={index} className="px-4 py-2 bg-gray-200 rounded-lg mx-2 whitespace-nowrap">
            <ArticleCard article={article}/>
          </div>
        )
      })}
    </div>
  )
}

export default HeadlineGrid
