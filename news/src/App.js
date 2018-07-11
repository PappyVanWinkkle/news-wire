import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Tech from './containers/techNews';
import Metro from './containers/metro';
import Reddit from './containers/reddit';
import BBC from './containers/bbc';
import Sport from './containers/sport';
import ErrorPage from './components/errors';
import CNN from './containers/cnn';
import Verge from './containers/verge';
import { Provider } from 'react-redux';
import General from './containers/generalNews';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={General} />
							<Route exact path="/tech" component={Tech} />
							<Route exact path="/reddit" component={Reddit} />
							<Route exact path="/metro" component={Metro} />
							<Route exact path="/talk-sport" component={Sport} />
							<Route exact path="/verge" component={Verge} />
							<Route exact path="/bbc" component={BBC} />
							<Route exact path="/cnn" component={CNN} />
							<Route component={ErrorPage} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
