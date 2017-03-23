var React = require('react');
var Message = require('WeatherMessage');
var Form = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false
		}
	},

	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true
		});

		openWeatherMap.getTemp(location).then(
			function (temp) {
				that.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			},
			function (message) {
				that.setState({
					isLoading: false
				});
				alert(message);
			}
		);
	},

	render: function () {
		var {location, temp, isLoading} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <p>Fetching weather...</p>;
			}
			else if (temp && location) {
				return <Message location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h2>Weather component</h2>
				<Form onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
