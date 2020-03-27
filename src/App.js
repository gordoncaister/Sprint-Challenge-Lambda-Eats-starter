import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pizza from "./components/Pizza"
import Home from "./components/Home"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pizza">Pizza</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/pizza">
            <Pizza />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

