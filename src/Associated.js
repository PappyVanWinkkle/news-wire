/*
* Component displays from the AP
*/
import React from "react";
import axios from "axios";
import moment from "moment";
import "./AP.css";

class AP extends React.Component {
  // setting the state
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: []
    };
  }
  // Making the AJAX request
  componentWillMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=reuters&apiKey=263eeacd7c684c84b8f069349d66590e`
      )
      .then(results => {
        this.setState({
          newsArticles: results.data.articles
        });
        //console.log(this.state.newsArticles)
      });
  }

  renderNewsArticles(article, index) {
    const publishedAt = moment(article.publishedAt).calendar();

    return (
      <div key={index}>
        <h5 className="news-title">{article.title}</h5>
        <p className="news-text">{article.description}</p>
        <p>{publishedAt}</p>
        <div>
          <a href={`${article.url}`} className="badge badge-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
  render() {
    const newsArticles = this.state.newsArticles.map(this.renderNewsArticles);
    return <div>{newsArticles}</div>;
  }
}

export default AP;
