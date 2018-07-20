import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Amplify from 'aws-amplify';
import Config from './aws-exports';

Amplify.configure(Config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
