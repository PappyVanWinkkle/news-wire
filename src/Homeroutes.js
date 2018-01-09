/*
* Route Navigation for the News Web application 
*/

import React from "react";
import {  BrowserRouter,  Route, Switch } from "react-router-dom";
import App from "./App";
import News from "./News";
import Error from "./ErrorPage";

const homeRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/news" component={News} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
// Exporting the component 
export default homeRoutes;