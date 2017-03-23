var React = require('react');

var WeatherMessage = ({location, temp}) => {
	// var {location, temp} = props;
	return (
		<p>Temperature in {location} is {temp} °C</p>
	);
};

module.exports = WeatherMessage;
