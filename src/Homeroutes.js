/*
* Route Navigation for the News Web application 
*/

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Bbc from "./bbc";
import Nbc from "./nbc";
import News24 from "./news24";
import Reuters from "./Associated";
import News from "./News";
import Error from "./ErrorPage";

const homeRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/news" component={News} />
          <Route path="/bbc" component={Bbc} />
          <Route path="/nbc" component={Nbc} />
          <Route path="/reuters" component={Reuters} />
          <Route path="/news24" component={News24} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
// Exporting the component
export default homeRoutes;
