var React = require('react');

// var About = React.createClass({

// 	render: function () {
// 		return (
// 			<h2>About component</h2>
// 		);
// 	}
// });

// stateless functional component => shorter version
var About = (props) => {
	return (
		<h2>About component</h2>
	);
};

module.exports = About;
