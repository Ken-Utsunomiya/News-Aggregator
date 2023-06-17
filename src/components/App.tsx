import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "../pages/Dashboard"

import Header from "./Header"

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/headlines" element={<div />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
