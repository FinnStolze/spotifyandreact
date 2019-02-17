import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import history from "../history";
import RedirectedPage from "./RedirectedPage";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/redirectedpage" component={RedirectedPage} />
      </div>
    </Router>
  );
};

export default App;
