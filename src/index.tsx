import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"

import Dashboard from "./pages/Dashboard"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container) 
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </React.StrictMode>
  )
}
