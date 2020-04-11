import React from "react"
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import App from './App'

const ArtPiece = () => {
  let match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <App dynamic={false} />
      </Route>
    </Switch>
  )
}

export default ArtPiece