/*
* Component displays from the AP
*/
import React from "react";
import axios from "axios";
import moment from "moment";
import "./AP.css";

class AP extends React.Component {
    // setting the state 
    constructor (props) {
        super(props) 
        this.state = {
           newsArticles:[]
        }
    }
    // Making the AJAX request 
    componentWillMount () {
        axios.get(`https://newsapi.org/v2/everything?sources=news24&apiKey=263eeacd7c684c84b8f069349d66590e`)
        .then(results => {
            this.setState({
                newsArticles: results.data.articles
            })
            //console.log(this.state.newsArticles)
        })
        
    }

    renderNewsArticles (article, index) {
        const publishedAt = moment(article.publishedAt).calendar();
        
        return (
           
            <div className="inner-card" key={index}>
             <div className="card text-center" >
               <div className="card-body" >
                 <h5 className="card-title">{article.title}</h5>
                 <p className="card-text">
                   {article.description}
                 </p>
                 <p>{publishedAt}</p>
                 <div>
                 <a href={``} className="btn btn-outline-primary ">
                   Read-More
                 </a>
                 </div>
               </div>
               </div>
             </div>
           
        )
    }
    render () {
        const newsArticles = this.state.newsArticles.map(this.renderNewsArticles)
        return (
            <div>
                {newsArticles}
             </div>   
        )
    }
   
}

export default AP;