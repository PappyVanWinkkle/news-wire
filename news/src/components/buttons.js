/* ===================
   BUTTONS 
========================= */
import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
	return (
		<div>
			<Link to="/tech" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">TechCrunch</span>
				</p>
			</Link>
			<Link to="/reddit" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">Reddit</span>
				</p>
			</Link>
			<Link to="/metro" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">Metro</span>
				</p>
			</Link>
			<Link to="/talk-sport" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">Talk-Sport</span>
				</p>
			</Link>
			<Link to="/verge" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">The Verge</span>
				</p>
			</Link>
			<Link to="/bbc" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">BBC</span>
				</p>
			</Link>
			<Link to="/cnn" style={{ textDecoration: 'none' }}>
				<p>
					<span className="badge badge-secondary">CNN</span>
				</p>
			</Link>
		</div>
	);
};

export default Buttons;
