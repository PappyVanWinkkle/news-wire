/*
* Main Landing Component of the News Application
* First UI Component displayed to the user 
*/


import React, { Component } from "react";
import "./App.css";
import News from "./News";

class App extends Component {
  render() {
    return (
      <header className="header-section">
        <div className="header-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-2">NewsWire</h1>
                <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <i className="fa fa-check" />
                  </div>
                  <div className="p-4 align-self-end">
                    <p>
                      The best place for you to read all the News in the World
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <i className="fa fa-check" />
                  </div>
                  <div className="p-4 align-self-end">
                    <p>
                      We get our News from the best sources in the News business
                      and it's all for free.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End of the col-lg-8 class section */}
              <div className="col-lg-4">
                <button className="btn btn-primary btn-lg btn-block">
                  Get News Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    
    );
  }
}

export default App;
