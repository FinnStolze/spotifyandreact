import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import history from "../history";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <div>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;
