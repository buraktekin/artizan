import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReactDOM from "react-dom"
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)