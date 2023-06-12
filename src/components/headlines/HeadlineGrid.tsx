import React from "react"

import ArticleCard from "../articles/ArticleCard/ArticleCard"

import type { Article } from "../../types/articles"

interface HeadlineGridProps {
  headline: Article[]
}

const HeadlineGrid = (props: HeadlineGridProps) => {
  const { headline } = props

  return (
    <div>
      { headline.map((article: Article, index: number) => {
        return (
          <div key={index}>
            <ArticleCard article={article}/>
          </div>
        )
      })}
    </div>
  )
}

export default HeadlineGrid
