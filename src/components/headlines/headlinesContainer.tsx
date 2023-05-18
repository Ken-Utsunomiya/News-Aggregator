import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { fetchHeadline, selectHeadlines } from "../../redux/articles/headlinesSlice"

const HeadlinesContainer = () => {
  const headlines = useAppSelector(selectHeadlines)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchHeadline({
      category: "science",
      country: "us"
    }))
    console.log(headlines["science"])
  }, [dispatch])

  return (
    <div className="flex justify-center items-center">
      here
    </div>
  )
}

export default HeadlinesContainer