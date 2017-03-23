var axios = require('axios');

const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=53c75d8909ecd7101819e24a4f11922b';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(
			function (res) {
				// errors:
				if (res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				}
				else {
					return res.data.main.temp;
				}
			},
			function (res) {
				throw new Error(res.data.message);
			}
		);
	}
};
