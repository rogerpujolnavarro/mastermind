const createGradient = (color) => {
	return `radial-gradient(circle at 100px 100px, white 40%, ${color})`;
};

const saveLocal = (varName, data) => {
	localStorage.setItem(varName, JSON.stringify(data));
};
const getLocal = (varName) => {
	return localStorage.getItem(varName) ? JSON.parse(localStorage.getItem(varName)) : false;
};

export { createGradient, getLocal, saveLocal };
