import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

import Dashboard from "../pages/Dashboard"
import theme from "../styles/theme"

import Header from "./Header"

const App = () => {
  return (
    <div>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/headlines" element={<div />} />
            </Routes>
          </BrowserRouter>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </div>
  )
}

export default App
