import backgroundImages from '../images/backgrounds/*.jpg';

function log() {
	console.log(backgroundImages);
}

const backgrounds = {
	bcgr1: {
		file: backgroundImages.bcgr1,
		color: 'grey'
	},
	bcgr2: {
		file: backgroundImages.bcgr2,
		color: 'lightpink'
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
}

export { setBackground };
