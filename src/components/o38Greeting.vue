<template>
	<p class="hello">{{ greeting }}. {{ translation.timeReport( localeTime ) }}, {{ translation.weatherReport( temp ) }}.</p>
</template>

<script>
	import axios from 'axios'
	import debounce from 'lodash.debounce'
	import { config } from './config.js'

	const translations = {
		en: {
			greetings: {
				morning: 'Good morning',
				afternoon: 'Good afternoon',
				evening: 'Good evening'
			},
			timeReport: (hour) => {
				return `It's ${hour} o'clock in Wrocław now`
			},
			weatherReport: (temperature) => {
				return `and the temperature is ${temperature}°C`
			}
		},
		pl: {
			greetings: {
				morning: 'Dzień dobry',
				afternoon: 'Dzień dobry',
				evening: 'Dobry wieczór'
			},
			timeReport: (hour) => {
				return `We Wrocławiu jest teraz ${hour} godzina`
			},
			weatherReport: (temperature) => {
				return `a temperatura to ${temperature}°C`
			}
		}
	}

	export default {
		data() {
			return {
				localeTime: '',
				temp: '',
				timerID: ''
			}
		},
		props: ['userLanguage'],
		computed: {
			greeting() {
				const time = parseInt(this.localeTime)
				return time > 7 && time < 19 ? this.translation.greetings.afternoon : this.translation.greetings.evening
			},
			translation: function() {
				return translations[this.userLanguage]
			}
		},
		created() {
			this.localeTime = this.getTime()
			this.timerID = setInterval(this.getTime, 5000)
			this.getTemperature()
			// this.yyy = userLanguage
		},
		beforeDestroy() {
			clearInterval(this.timerID)
		},
		methods: {
			getTime() {
				const toLocaleOptions = {
					hour: '2-digit',
					minute: '2-digit',
					timeZone: 'Europe/Warsaw'
				}
				return this.localeTime = (new Date()).toLocaleString(navigator.language, toLocaleOptions)
			},
			getTemperature() {
				const vm = this
				axios.get('http://api.openweathermap.org/data/2.5/weather?id=3081368&units=metric&lang=pl&APPID=' + config.weatherKey)
				.then(function(response) {
					return vm.temp = Math.round(response.data.main.temp)
				})
				.catch(function(error) {
					return console.log(`Error: { error }`)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
p.hello {
	// font-size: 14px;
	margin-bottom: 12px;
	// font-weight: bold;
}
</style>
