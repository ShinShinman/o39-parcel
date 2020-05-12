<template>
	<div id="background" v-bind:style="{ backgroundImage: currentBackgroundImage }"></div>
</template>

<script>
import backgroundImages from '../images/backgrounds/*.jpg'

const backgrounds = {
	bcgr0: {
		file: '',
		color: 'black'
	},
	bcgr1: {
		file: backgroundImages.czteropak,
		color: 'grey'
	},
	bcgr2: {
		file: backgroundImages.infomnwr,
		color: 'cornflowerblue'
	},
	bcgr3: {
		file: backgroundImages.mawww2,
		color: '#84a3ff'
	},
	bcgr4: {
		file: backgroundImages.nomus,
		color: 'blueviolet'
	},
	bcgr5: {
		file: backgroundImages.dzikie,
		color: 'rgb(249, 179, 236)' // '#08f95d' // '#00bfbf'
	},
	bcgr6: {
		file: backgroundImages.werk,
		color: 'white'
	},
	bcgr7: {
		file: '',
		color: 'black'
	}
}

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
			currentBackgroundImage: 'pi'
		}
	},
	created() {
		this.getBackground()
	},
	methods: {
		getBackground: function() {
			let background = randomBackground()
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
