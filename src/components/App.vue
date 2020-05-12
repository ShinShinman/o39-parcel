<template>
	<div id="app" v-bind:style="{ color: currentColor }">
		<transition name="simple-fade">
			<o39-background v-show="!clientList" v-on:colorChange="changeColor"></o39-background>
		</transition>
		<o39-header v-on:clientlistevent="clientListToggle" v-bind:currentColor="currentColor"></o39-header>
		<transition name="slide-fade">
			<o39-client-list v-if="clientList"></o39-client-list>
		</transition>
		<o39-footer v-bind:currentColor="currentColor"></o39-footer>

		<!-- <client-list v-if="clientList"></client-list> -->
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
			currentColor: 'black'
		}
	},
	methods: {
		clientListToggle: function () {
			// this.clientList = this.clientList ? false : true;
			this.clientList = !this.clientList
		},
		changeColor: function(value) {
			this.currentColor = value
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

<style lang="scss">
</style>
