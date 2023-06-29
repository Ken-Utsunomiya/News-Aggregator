import React, { useEffect } from "react"

import { fetchArticles } from "../redux/articles/articlesSlice"
import { fetchHeadline } from "../redux/articles/headlinesSlice"
import { selectCategory } from "../redux/category/categorySlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectLanguage } from "../redux/languages/languageSlice"

const Articles = () => {
  const dispatch = useAppDispatch()
  const selectedCategory = useAppSelector(selectCategory)
  const selectedLanguage = useAppSelector(selectLanguage)

  useEffect(() => {
    if (selectedCategory) {
      dispatch(
        fetchHeadline({
          category: selectedCategory,
          country: selectedLanguage
        })
      )
    } else {
      dispatch(
        fetchArticles({
          language: selectedLanguage,
          q: ""
        })
      )
    }
  })
  
  return (
    <div></div>
  )
}

export default Articles
