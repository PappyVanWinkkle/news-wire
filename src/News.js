/*
* News Component page UI for the News Application 
* The page will render the main headlines from the 
* NY times using an API request with News API 
* The other side of the component will contain other 
* News sources eg BBC, CNN etc 
*/
import React from "react";
import "./News.css";
import axios from "axios";
import moment from "moment";
import Nav from "./Navbar";

class News extends React.Component {
  // setting the state
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=263eeacd7c684c84b8f069349d66590e
        `
      )
      .then(results => {
        this.setState({
          articles: results.data.articles
        });
      });
  }

  renderNews(article, index) {
    const publishedAt = moment(article.publishedAt).calendar();
    return (
      <div className="news-section bg-light text-center" key={index}>
        <div className="news-inner">
          <div className="container-fluid">
            <div className="row ">
              {/*End of the images section of the News app*/}
              <div className="col-lg-8 d-flex flex-row justify-content-center">
               <div className="inner-card">
                <div className="card text-center" >
                  <div className="card-body" >
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.description}
                    </p>
                    <p>{publishedAt}</p>
                    <a href={`${article.url}`} className="btn btn-outline-primary ">
                      Read-More
                    </a>
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const articles = this.state.articles.map(this.renderNews);
    return (
      <div className="" >
        <Nav />
        {articles}
      </div>
    );
  }
}

export default News;

//Object.keys(data).map(item => {...});
