		const axios = require('axios');
		const conf = require('./config.js');

		const greetingContainer = document.getElementById('greeting');
		const timeContainer = document.getElementById('time');
		const tempContainer = document.getElementById('temp');

		(function updateClock() {
			let localeTime = (new Date()).toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Warsaw'});
			let greeting;
			timeContainer.innerHTML = localeTime;
			parseInt(localeTime) > 7 && parseInt(localeTime) < 17 ? greeting = 'Dzień dobry' : greeting = 'Dobry wieczór';
			greetingContainer.innerHTML = greeting
			setTimeout(updateClock, 5000);
		})();

		axios.get('http://api.openweathermap.org/data/2.5/weather?id=3081368&units=metric&lang=pl&APPID=' + config.weatherKey)
		.then(function(response) {
			tempContainer.innerHTML = Math.round(response.data.main.temp);
		})
		.catch(function(error) {
		})
