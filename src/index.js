import React from "react"
import {
  HashRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReactDOM from "react-dom"
import App from './App'
import ArtPiece from './ArtPiece'


ReactDOM.render(
  <HashRouter basename='/artizan'>
    <Switch>
      <Route exact path='/'>
        <App dynamic={true} />
      </Route>
      <Route path='/:artPieceID'>
        <ArtPiece />
      </Route>
    </Switch>
  </HashRouter>
  ,
  document.getElementById('root')
)