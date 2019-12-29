import { config } from './modules/config';
import axios from 'axios';
import { setBackground } from './modules/pageBackground';

import './scss/stylez.scss';

const greetingContainer = document.getElementById('greeting');
const timeContainer = document.getElementById('time');
const tempContainer = document.getElementById('temp');

setBackground();


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

//lista klientów
let hash = window.location.hash;
if (hash) {
	document.querySelector(hash).classList.add('show');
} else {
	//
}

const clientList = document.getElementById('client-list');
const clientListBtn = document.getElementById('client-list-btn');

clientListBtn.onclick = function() {
	clientList.classList.add('show');
}

// clientListBtn.onclick = function() {
// 	if (clientList.classList.contains('show')) {
// 		clientList.classList.remove('show');
// 		clientListBtn.classList.remove('active');
// 		// window.location.hash = "#";
// 		// window.location.href = "#";
// 		window.location.href = '#home';
// 		console.log("webkitLineBreak" in document.documentElement.style);
// 	} else {
// 		clientList.classList.add('show');
// 		clientListBtn.classList.add('active');
// 	}
// }

document.getElementById('home-btn').onclick = function() {
	clientList.classList.remove('show');
}
