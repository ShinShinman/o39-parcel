<template>
	<div id="app" v-bind:style="styleObject">
		<transition name="simple-fade">
			<o39-background v-show="!clientList" v-on:colorChange="changeColor"></o39-background>
		</transition>
		<o39-header v-on:clientlistevent="clientListToggle" v-bind:currentColor="styleObject.color"></o39-header>
		<transition name="slide-fade">
			<o39-client-list v-if="clientList"></o39-client-list>
		</transition>
		<o39-footer v-bind:currentColor="styleObject.color"></o39-footer>
	</div>
</template>

<script>
import o39Header from './o39Header.vue';
import o39Footer from './o39Footer.vue';
import o39ClientList from './o39ClientList.vue';
import o39Background from './o39Background.vue';

export default {
	data() {
		return {
			clientList: false,
			styleObject: {
				color: 'black',
				backgroundColor: ''
			}
		}
	},
	methods: {
		clientListToggle: function () {
			// this.clientList = this.clientList ? false : true;
			this.clientList = !this.clientList
		},
		changeColor: function(value) {
			this.styleObject = value;
		}
	},
	components: {
		o39ClientList,
		o39Header,
		o39Footer,
		o39Background
	}
}
</script>

<style lang="scss" scoped>
#app {
	box-sizing: border-box;
	height: 100vh;
	position: relative;
	padding: 10px;
	z-index: 0;
}
</style>
