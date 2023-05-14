import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ShowList from "./containers/ShowList";
import ShowSummary from "./containers/ShowSummary";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={ShowList} />
        <Route exact path="/shows/:id" component={ShowSummary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
