/*
 ====================
   404 PAGE FOR THE APP
 *=================== */

import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Errors = () => {
	return (
		<div>
			<div className="container-fluid" style={{ background: '#F6F6F6' }}>
				<div className="row">
					<div className="col-sm-12">
						<Link to="/" style={{ textDecoration: 'none' }}>
							<button type="button" className="btn btn-outline-danger btn-lg mt-4">
								Back Home
							</button>
						</Link>
						<div>
							<div className="container">
								<h1
									className="display-1 text-center text-danger"
									style={{ marginTop: '10rem', fontWeight: '800' }}
								>
									404 Page Not Found
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Errors;
