import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route , useRouterHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={useRouterHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={App} />
      		<Route path="inbox" component={App} />
		</Route>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
