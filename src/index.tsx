import React from "react"
import ReactDOM from "react-dom"

import Dashboard from "./pages/Dashboard"
import { Provider } from "react-redux"
import { store } from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)