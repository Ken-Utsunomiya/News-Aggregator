import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import ArticlesContainer from "../articles/ArticlesContainer"
import { fetchHeadline, selectHeadlines } from "../../redux/articles/headlinesSlice"

const DEFAULT_HEADLINE_CATEGORY = ["technology", "business", "general"]

const HeadlinesContainer = () => {
  const headlines = useAppSelector(selectHeadlines)
  const dispatch = useAppDispatch()

  useEffect(() => {
    for (let i = 0; i < DEFAULT_HEADLINE_CATEGORY.length; i++) {
      dispatch(fetchHeadline({
        category: DEFAULT_HEADLINE_CATEGORY[i],
        country: "us"
      }))
    }
  }, [dispatch])

  return (
    <div className="flex justify-center items-center">
      { Object.entries(headlines).map(([category, headline]) => {
        return <ArticlesContainer key={category} articles={headline} />
      })}
    </div>
  )
}

export default HeadlinesContainer
