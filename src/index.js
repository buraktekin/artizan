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
import ArtPiece from './ArtPiece'


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <App dynamic={true} />
      </Route>
      <Route path='/artpiece'>
        <ArtPiece />
      </Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
)