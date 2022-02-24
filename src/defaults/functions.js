// RGB code colors
const dark = '33, 33, 33';
const light = '238, 238, 238';
const gray = '100, 100, 100';
const mainColor = '137, 82, 61';
const primaryDark = '102, 52, 239';
const primaryLight = '147, 112, 243';
const primaryModern = '28, 101, 140';
const mainColorModern = '57, 138, 185';

const changeAppearance = (appearance) => {
	if (appearance !== 'vintage') {
		document.documentElement.style.setProperty('--image', 'url("./background.png")');
		document.documentElement.style.setProperty('--main-color', mainColorModern);
		document.documentElement.style.setProperty('--primary', primaryModern);
	} else {
		document.documentElement.style.setProperty('--image', '');
		document.documentElement.style.setProperty('--main-color', mainColor);
	}
};

const changeColors = (modeDark) => {
	if (modeDark) {
		document.documentElement.style.setProperty('--dark', dark);
		document.documentElement.style.setProperty('--light', light);
		document.documentElement.style.setProperty('--gray', gray);
		document.documentElement.style.setProperty('--main-color', mainColor);
		document.documentElement.style.setProperty('--primary', primaryDark);
	} else {
		document.documentElement.style.setProperty('--light', dark);
		document.documentElement.style.setProperty('--dark', light);
		document.documentElement.style.setProperty('--gray', light);
		document.documentElement.style.setProperty('--main-color', mainColor);
		document.documentElement.style.setProperty('--primary', primaryLight);
	}
};

const configColors = (colors) => {
	colors.forEach((color, index) => {
		document.documentElement.style.setProperty(`--color${index}`, color);
	});
};

const getLocal = (varName) => {
	return localStorage.getItem(varName) ? JSON.parse(localStorage.getItem(varName)) : false;
};
const saveLocal = (varName, data) => {
	localStorage.setItem(varName, JSON.stringify(data));
};

export { changeAppearance, changeColors, configColors, getLocal, saveLocal };
