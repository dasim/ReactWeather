var React = require('react');
var NavLink = require('react-router-dom').NavLink;

var Nav = (props) => {
	return (
		<ul>
			<li><NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} exact>Weather</NavLink></li>
			<li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
			<li><NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
		</ul>
	);
};

module.exports = Nav;
