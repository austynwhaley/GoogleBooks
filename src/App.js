import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Save";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;