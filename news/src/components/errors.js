/* ========================
   404 PAGE
============================ */

import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Errors = () => {
	return (
		<div>
			<Nav />
			<div className="row">
				<div className="col-sm-12">
					<div className="jumbotron jumbotron-fluid" style={{ height: '100vh', width: '100vw' }}>
						<div className="container">
							<h1 className="display-4" style={{ fontWeight: '800' }}>
								404 Page Not Found
							</h1>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Errors;
