var React = require('react');
var Route = require('react-router-dom').Route;

var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var Main = (props) =>  {
	return (
		<div>
			<h2>Main component</h2>
			<Nav/>
			<Route exact path="/" component={Weather} />
			<Route path="/about" component={About} />
			<Route path="/examples" component={Examples} />
		</div>
	);
};

module.exports = Main;
