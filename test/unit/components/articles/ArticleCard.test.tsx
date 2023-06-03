/**
 * @jest-environment jsdom
 */

import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import ArticleCard from "../../../../src/components/articles/ArticleCard/ArticleCard"

import type { Article } from "../../../../src/types/articles"

test("it shows one image and one text title", () => {
  const article: Article = {
    source: "",
    author: "",
    title: "test",
    description: "",
    url: "",
    urlToImage: "https://test_image.com",
    publishedAt: "",
    content: ""
  }

  render(<ArticleCard article={article} />)

  const image = screen.getByRole("img")
  const title = screen.getByRole("heading")

  expect(image).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})
