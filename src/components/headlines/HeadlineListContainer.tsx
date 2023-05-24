import React, { useEffect } from "react"

import { fetchHeadline, selectHeadlines } from "../../redux/articles/headlinesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectLanguage } from "../../redux/languages/languageSlice"

import HeadlineContainer from "./HeadlineContainer"

const DEFAULT_HEADLINE_CATEGORY = ["technology", "business", "general"]

const HeadlinesContainer = () => {
  const headlines = useAppSelector(selectHeadlines)
  const selectedLanguage = useAppSelector(selectLanguage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    for (let i = 0; i < DEFAULT_HEADLINE_CATEGORY.length; i++) {
      const country = selectedLanguage === "en" ? "us" : "jp"

      dispatch(fetchHeadline({
        category: DEFAULT_HEADLINE_CATEGORY[i],
        country: country
      }))
    }
  }, [dispatch, selectedLanguage])

  return (
    <div className="grid grid-cols-1 gap-y-5 grid-flow-row">
      { Object.entries(headlines).map(([category, headline]) => {
        return (
          <div key={category} >
            <HeadlineContainer headline={headline} category={category} />
          </div>
        )
      })}
    </div>
  )
}

export default HeadlinesContainer
