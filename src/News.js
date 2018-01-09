/*
* News Component page UI for the News Application 
* The page will render the main headlines from the 
* NY times using an API request with News API 
* The other side of the component will contain other 
* News sources eg BBC, CNN etc 
*/
import React, { Component } from "react";
import "./News.css";
import Nav from "./Navbar";

class News extends React.Component {
  render() {
    return (
      <div className="news-section bg-light">
         <Nav />
        <div className="news-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 d-flex flex-column">
                <div className="images align-self-center">
                  <img
                    className="box"
                    alt={`bbc `}
                    src={require(`./Images/bbc.png`)}
                  />
                </div>
                <div className="align-self-center">
                  <img
                    className="box"
                    alt={`cbc `}
                    src={require(`./Images/cbc.png`)}
                  />
                </div>
                <div className="align-self-center">
                  <img
                    className="box"
                    alt={`cnn `}
                    src={require(`./Images/cnn.png`)}
                  />
                </div>
                <div className="align-self-center">
                  <img
                    className="box"
                    alt={`Techcrunch`}
                    src={require(`./Images/Techcrunch.jpg`)}
                  />
                </div>
                <div className="align-self-center">
                  <img
                    className="box"
                    alt={`Reuters`}
                    src={require(`./Images/Reuters.png`)}
                  />
                </div>
                <div className="align-self-center">
                  <img
                    className="box"
                    alt={`News 24 `}
                    src={require(`./Images/news24.jpg`)}
                  />
                </div>

                <div className="align-self-center">
                  <img
                    className="box"
                    alt={`The independent`}
                    src={require(`./Images/independent.png`)}
                  />
                </div>
              </div>
              {/*End of the images section of the News app*/}
              <div className="col-lg-9 d-flex flex-column">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="class-title">News title for article</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="" className="btn btn-outline-primary ">
                      Read-More
                    </a>
                  </div>
                </div>

                {""}

                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="class-title">News title for article</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="" className="btn btn-outline-primary ">
                      Read-More
                    </a>
                  </div>
                </div>

                {""}

                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="class-title">News title for article</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="" className="btn btn-outline-primary ">
                      Read-More
                    </a>
                  </div>
                </div>

                {""}

                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="class-title">News title for article</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="" className="btn btn-outline-primary ">
                      Read-More
                    </a>
                  </div>
                </div>
                {""}
              </div>
            </div>
          </div>
        </div>
        {/*Footer for the News APP to come here */}
      </div>
    );
  }
}
// Exporting the News Component
export default News;
