import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		flexGrow: 1
	}
};

function SimpleAppBar(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" style={{ background: '#1E88E5' }}>
				<Toolbar>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Typography variant="title" color="inherit" style={{ color: '#FFFFFF' }}>
							NewsWires
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}

SimpleAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
