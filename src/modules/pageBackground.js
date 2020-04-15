import backgroundImages from '../images/backgrounds/*.jpg';

function log() {
	console.log(backgroundImages);
}

log();

const backgrounds = {
	bcgr0: {
		file: '',
		color: 'black'
	},
	bcgr1: {
		file: backgroundImages.bcgr1,
		color: 'grey'
	},
	bcgr2: {
		file: backgroundImages.bcgr2,
		color: 'cornflowerblue'
	},
	bcgr3: {
		file: backgroundImages.mawww2,
		color: 'royalblue'
	},
	bcgr4: {
		file: backgroundImages.nomus,
		color: 'blueviolet'
	},
	bcgr5: {
		file: backgroundImages.dzikie,
		color: '#00bfbf'
	},
	bcgr6: {
		file: backgroundImages.werk,
		color: 'white'
	}
};

function randomBackground() {
	const keys = Object.keys(backgrounds);
  return backgrounds[keys[ keys.length * Math.random() << 0]];
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

export { setBackground };
