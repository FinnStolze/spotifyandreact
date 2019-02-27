import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import history from "../history";
import RedirectedPage from "./RedirectedPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/redirectedpage" component={RedirectedPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
