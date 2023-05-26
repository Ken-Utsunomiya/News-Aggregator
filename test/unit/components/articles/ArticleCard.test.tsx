/**
 * @jest-environment jsdom
 */

import React from "react"

import { render } from "@testing-library/react"

import ArticleCard from "../../../../src/components/articles/ArticleCard/ArticleCard"

import type { Article } from "../../../../src/types/articles"

test("it shows one image and one text title", () => {
  const article: Article = {
    source: "",
    author: "",
    title: "test",
    description: "",
    url: "",
    urlToImage: "testImage",
    publishedAt: "",
    content: ""
  }

  render(<ArticleCard article={article} />)
})