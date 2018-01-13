/*
* Shows NBC news content from the news API
*/

import React from "react";
import axios from "axios";
import moment from "moment";
import "./nbc.css";
import Nav from "./Navbar";

class Nbc extends React.Component {
  // setting the state
  constructor(props) {
    super(props);
    this.state = {
      nbcNews: []
    };
  }
  // connecting to the api
  componentWillMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=nbc-news&apiKey=263eeacd7c684c84b8f069349d66590e`
      )
      .then(results => {
        this.setState({
          nbcNews: results.data.articles
        });
      });
  }
  renderNbc(article, key) {
    const publishedAt = moment(article.publishedAt).calendar();
    return (
      <div className="news-section bg-light" key={key}>
        <div className="container d-flex flex-row justify-content-center">
          <div className="row">
            <div className="article col-sm-12 text-center">
              <h5 className="news-title">{article.title}</h5>
              <p className="news-text">{article.description}</p>
              <p>{publishedAt}</p>
              <div>
                <a href={`${article.url}`} className="badge badge-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // rendering to the DOM
  render() {
    const articles = this.state.nbcNews.map(this.renderNbc);
    return (
      <div>
        <Nav />
        {articles}
      </div>
    );
  }
}

export default Nbc;
