import React, { useEffect } from "react"

import { fetchHeadline, selectHeadlines } from "../../redux/articles/headlinesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"

import HeadlineContainer from "./HeadlineContainer"

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
    <div className="flex justify-center items-center grid grid-cols-1">
      { Object.entries(headlines).map(([category, headline]) => {
        return <HeadlineContainer headline={headline} key={category} />
      })}
    </div>
  )
}

export default HeadlinesContainer
