import React from "react"

import HeadlineGrid from "./HeadlineGrid"

import type { Article } from "../../types/articles"

interface HeadlineContainerProps {
  headline: Article[],
  category: string
}

const HeadlineContainer = (props: HeadlineContainerProps) => {
  const { headline, category } = props
  return (
    <div className="container h-100">
      <HeadlineGrid headline={headline} />
    </div>
  )
}

export default HeadlineContainer
