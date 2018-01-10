/*
* 404 Error page when the user is misdirected 
*/
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import Nav from "./Navbar";

const Error = () => {
  return (
    <div className="jumbotron display-flex flex-row text-center">
      <Nav />
      <div className="error-inner">
        <h1 className="display-4 mt-4">404 ERROR</h1>
        <p className="lead">
          Oooops Bad News here please try and go back to the previous page
          thanks
        </p>
        <Link to="/news">
          <p className="lead">
            <a className="btn btn-outline-primary" role="button">
              Back to News
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
