var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit: function (e) {
		e.preventDefault();
		var location = this.refs.location.value;
		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},

	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<p><input ref="location" type="text" placeholder="Enter city name"/></p>
				<p><input type="submit" value="Get Weather"/></p>
			</form>
		);
	}
});

module.exports = WeatherForm;
