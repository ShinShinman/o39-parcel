<template>
	<p class="hello">{{ greeting }}. We Wrocławiu jest teraz godzina {{ localeTime }}, a&nbsp;temperatura to {{temp}}&#176;C.</p>
</template>

<script>
	import axios from 'axios'
	import debounce from 'lodash.debounce'
	import { config } from './config.js'

	export default {
		data() {
			return {
				localeTime: '',
				temp: '',
				timerID: ''
			}
		},
		computed: {
			greeting() {
				const time = parseInt(this.localeTime)
				return time > 7 && time < 19 ? 'Dzień dobry' : 'Dobry wieczór' 
			}
		},
		created() {
			this.localeTime = this.getTime()
			this.timerID = setInterval(this.getTime, 5000)
			this.getTemperature()
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
