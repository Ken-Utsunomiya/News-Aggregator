import React from "react"

import HeadlineGrid from "./HeadlineGrid"

import type { Article } from "../../types/articles"

interface HeadlineContainerProps {
  headline: Article[],
  key: string
}

const HeadlineContainer = (props: HeadlineContainerProps) => {
  const { headline, key } = props
  return (
    <div className="container" key={key}>
      <HeadlineGrid headline={headline} />
    </div>
  )
}

export default HeadlineContainer
