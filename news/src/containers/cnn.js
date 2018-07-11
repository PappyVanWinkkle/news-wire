/* =================
   GENERAL NEWS 
===================== */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Buttons from '../components/buttons';
import getCnn from '../actions/cnn';
import moment from 'moment';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

class Cnn extends Component {
	componentWillMount() {
		this.props.getCnn();
	}
	render() {
		return (
			<div>
				<Nav />
				<div className="container">
					<div className="row">
						<div className="col-sm-4" style={{ marginTop: '3rem' }}>
							<h4 style={{ fontFamily: "'Abril Fatface', cursive" }}>News Sources</h4>
							<Buttons />
						</div>
						<div className="col-sm-8" style={{ marginTop: '3rem' }}>
							<h4 style={{ fontFamily: "'Abril Fatface', cursive" }}>HeadLines</h4>
							{this.props.cnn.map(function(article, value) {
								const publishedAt = moment(article.publishedAt).calendar();
								return (
									<div key={value}>
										<h5 style={{ fontFamily: "'Lato', sans-serif", color: '#d63031' }}>
											{article.title}
										</h5>
										<p style={{ fontFamily: "'Lato', sans-serif" }}>{article.description}</p>
										<p>{article.author}</p>
										<p>{publishedAt}</p>
										<div>
											<a href={`${article.url}`}>
												<button type="button" className="btn btn-outline-primary">
													Read More
												</button>
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Cnn.propTypes = {
	getCnn: PropTypes.func.isRequired,
	cnn: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	cnn: state.cnn.cnn
});

export default connect(mapStateToProps, { getCnn })(Cnn);
