import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Homeroutes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Home />,
  document.getElementById("root")
);
registerServiceWorker();
