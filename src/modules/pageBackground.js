import backgroundImages from '../images/backgrounds/*.jpg';

const print = console.log.bind(console, '☛');
// print(backgroundImages);

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
