/*
* Component presents news fron News 24 using the News API
*/
import React from "react";
import axios from "axios";
import Nav from "./Navbar";
import moment from "moment";

class News24 extends React.Component {
  // setting the state
  constructor(props) {
    super(props);
    this.state = {
      news24: []
    };
  }
  // Making the AJAX request
  componentWillMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=news24&apiKey=263eeacd7c684c84b8f069349d66590e
        `
      )
      .then(results => {
        this.setState({
          news24: results.data.articles
        });
      });
  }

  renderNews24(article, index) {
    const publishedAt = moment(article.publishedAt).calendar();
    return (
      <div className="news-section bg-light" key={index}>
        <div className="container d-flex flex-row justify-content-center">
          <div className="row">
            <div className="articles col-sm-11 text-center">
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

  render() {
    const articles = this.state.news24.map(this.renderNews24);
    return (
      <div>
        <Nav />
        {articles}
      </div>
    );
  }
}

export default News24;
