import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./HomePage";
import Projects from "./ProjectsPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/my-website">
          <Home></Home>
        </Route>

        <Route path="/my-projects">
          <Projects></Projects>
        </Route>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
