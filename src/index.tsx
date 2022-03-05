import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import * as serviceWorker from "./serviceWorker"
import { store } from "./features/shared/store"
import { Theme } from "features/darkMode/components"
import { Router } from "routes"
import "./styles.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <Router />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
