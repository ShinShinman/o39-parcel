import Vue from '../node_modules/vue/dist/vue.esm.js';
import App from './components/App.vue';

import './scss/stylez.scss';


new Vue({
	el: '#app',
	// render: h => h(App),
	template: '<App />', // to jest to samo co wers wyżej !
	components: { App }
})

// const app = new Vue({
// 	el: '#app',
// 	data: {
// 		greeting: 'Dzień dobry',
// 		time: '21:45',
// 		temp: '10',
// 		message: 'Yszt, yszt!',
// 		clientList: false
// 	},
// 	methods: {
// 		clientListToggle: function () {
// 			this.clientList = this.clientList ? false : true;
// 		}
// 		// yszt: function (txt) {
// 		//   this.message = txt;
// 		// }
// 	},
// 	components: {
// 		clientList,
// 		o39Header,
// 		o39Footer
// 	}
// })
