/*
* News Component page UI for the News Application 
* The page will render the main headlines from the 
* NY times using an API request with News API 
* The other side of the component will contain other 
* News sources eg BBC, CNN etc 
*/
import React, { Component } from "react";
import "./News.css";

class News extends React.Component {
  render() {
    return (
      <div className="news-section">
        <div className="news-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="d-flex flex-row">
                  <div className="images align-self-start">
                    <img alt={`bbc `} src={require(`./Images/bbc.png`)} />
                    <img alt={`cbc `} src={require(`./Images/cbc.png`)} />
                    <img alt={`cnn `} src={require(`./Images/cnn.png`)} />
                    <img
                      alt={`Techcrunch`}
                      src={require(`./Images/Techcrunch.jpg`)}
                    />
                    <img
                      alt={`Reuters`}
                      src={require(`./Images/Reuters.png`)}
                    />
                    <img
                      alt={`News 24 `}
                      src={require(`./Images/news24.jpg`)}
                    />
                    <img alt={`reddit`} src={require(`./Images/reddit.png`)} />
                    <img
                      alt={` politico`}
                      src={require(`./Images/politico.jpg`)}
                    />
                    <img
                      alt={`The independent`}
                      src={require(`./Images/independent.png`)}
                    />
                  </div>
                </div>
              </div>
              {/*End of the images section of the News app*/}
              <div className="col-lg-9">
                <div className="d-flex flex-row">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="class-title">News title for article</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="" class="btn btn-outline-primary ">
                        Read-More
                      </a>
                    </div>
                  </div>
                </div>
                {""}

                <div className="d-flex flex-row">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="class-title">News title for article</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="" class="btn btn-outline-primary ">
                        Read-More
                      </a>
                    </div>
                  </div>
                </div>
                {""}

                <div className="d-flex flex-row">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="class-title">News title for article</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="" class="btn btn-outline-primary ">
                        Read-More
                      </a>
                    </div>
                  </div>
                </div>
                {""}

                <div className="d-flex flex-row">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="class-title">News title for article</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="" class="btn btn-outline-primary ">
                        Read-More
                      </a>
                    </div>
                  </div>
                </div>
                {""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Exporting the News Component 
export default News