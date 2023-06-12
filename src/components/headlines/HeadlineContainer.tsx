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
    <div>
      <h3>{ category }</h3>
      <HeadlineGrid headline={headline} />
    </div>
  )
}

export default HeadlineContainer
