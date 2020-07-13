<template>
	<!-- <div id="background" v-bind:style="{ backgroundImage: currentBackgroundImage }"></div> -->
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

function preloadImg(url, _this) {
	const img = new Image();
	img.src = url;
	img.onload = function() {
		_this.styleObject.backgroundImage = `url(${img.src})`
		_this.styleObject.filter = ''
	}
}

export default {
	data() {
		return {
			styleObject: {
				backgroundImage: '',
				filter: 'blur(10px)'
			}
		}
	},
	created() {
		this.getBackground()
	},
	methods: {
		getBackground: function() {
			let background = randomBackground()
			preloadImg(background.file, this)
			this.styleObject.backgroundImage = `url(${ background.file_sml })`
			background.backgroundColor = background.backgroundColor ? background.backgroundColor : '';
			this.$emit('colorChange', background)
		}
	}
}
</script>

<style lang="scss" scoped>
#background {
	position: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	width: 105vw;
	height: 105vh;
	margin: -30px;
	z-index: -10;
	transition: filter 2s ease;
}

//Vue transition
.simple-fade-enter-active {
  transition: all .6s ease, filter 2s ease;
}
.simple-fade-leave-active {
  // transition: opacity .6s ease;
}
.simple-fade-enter, .simple-fade-leave-to {
  opacity: 0;
}
</style>
