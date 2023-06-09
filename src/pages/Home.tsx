import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "../components/Header"
import HeadlinesContainer from "../components/headlines/HeadlineListContainer"

import "../styles/index.css"


const Home = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<HeadlinesContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home
