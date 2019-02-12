import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
};

export default App;
