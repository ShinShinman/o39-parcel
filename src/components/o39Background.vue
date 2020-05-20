<template>
	<div id="background" v-bind:style="styleObject"></div>
</template>

<script>
import { backgrounds } from './backgrounds.js'

function setBackground () {
	const background = randomBackground();
	const backgroundContainer = document.getElementById('page-background');
	backgroundContainer.style.backgroundImage = `url(${ background.file })`;
	backgroundContainer.style.color = background.color;
	const svg = document.querySelectorAll('svg path');
	svg.forEach(function(item) {
		item.style.fill = background.color;
	})
}

function randomBackground() {
	const keys = Object.keys(backgrounds);
	return backgrounds[keys[ keys.length * Math.random() << 0]];
}

export default {
	data() {
		return {
			currentBackgroundImage: '',
			styleObject: {
				backgroundColor: '',
				backgroundImage: ''
			}
		}
	},
	created() {
		this.getBackground()
	},
	methods: {
		getBackground: function() {
			let background = randomBackground()
			this.styleObject.backgroundImage = `url(${ background.file })`
			this.styleObject.backgroundColor = background.backgroundColor ? background.backgroundColor : ''
			this.currentBackgroundImage = `url(${ background.file })`
			this.$emit('colorChange', background.color)
		}
	}
}
</script>

<style lang="scss" scoped>
#background {
	position: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	margin: -10px;
	z-index: -10;
}

//Vue transition
.simple-fade-enter-active {
  transition: all 1s ease;
}
.simple-fade-leave-active {
  transition: all .2s ease;
}
.simple-fade-enter, .simple-fade-leave-to {
  // transform: translateY(10px);
  opacity: 0;
}
</style>
