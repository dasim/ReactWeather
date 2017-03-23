var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').HashRouter;

var Main = require('Main');

ReactDOM.render(
	<Router>
		<Main/>
	</Router>,
	document.getElementById('app')
);