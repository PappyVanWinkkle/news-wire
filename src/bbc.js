/*
* Component will present news from the BBC using the NEWS API
*/
import React from "react";
import axios from "axios";
import moment from "moment";
import Nav from "./Navbar";

class Bbc extends React.Component {
  // setting the state
  constructor(props) {
    super(props);
    this.state = {
      bbcNews: []
    };
  }
  componentWillMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=263eeacd7c684c84b8f069349d66590e`
      )
      .then(results => {
        this.setState({
          bbcNews: results.data.articles
        });
      });
  }

  renderbbc(article, index) {
    const publishedAt = moment(article.publishedAt).calendar();
    return (
      <div className="news-section bg-light" key={index}>
        <div className="container d-flex flex-row justify-content-center">
          <div className="row">
            <div className="articles col-sm-12 text-center">
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
    const articles = this.state.bbcNews.map(this.renderbbc);
    return (
      <div>
        <Nav />
        {articles}
      </div>
    );
  }
}

export default Bbc;
