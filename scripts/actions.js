const body = document.body;
const themeSwitcher = document.getElementById('theme-switch');
const circle = document.querySelector('.red-stripe');
const cardWrapper = document.querySelector('.card-wrapper');

const checkBodyTheme = () => {
	if (body.classList.contains('light-mode')) {
		return 'light';
	}
	return 'dark';
};

const toggleTheme = () => {
	body.classList.toggle('light-mode');
};

const adjustElements = () => {
	const svgElmToSelect = checkBodyTheme();
	const svg = document.getElementById(svgElmToSelect);
	svg.classList.add('active');
};

const adjustingTheme = (currentTheme, desiredTheme) => {
	if (currentTheme === desiredTheme) return; // if it's already dark exit
	toggleTheme(); // change the theme color
	adjustElements(); // adjust icon
	document.getElementById(currentTheme).classList.remove('active');
};

adjustElements();

const handelThemeSwitch = (e) => {
	const theme = checkBodyTheme();
	if (e.target.id == 'dark') {
		adjustingTheme(theme, 'dark');
	} else {
		adjustingTheme(theme, 'light');
	}
};

themeSwitcher.addEventListener('click', handelThemeSwitch);

cardWrapper.addEventListener('scroll', () => {
	// Get current scrollTop
	const st = cardWrapper.scrollTop;

	// Decide how fast it should rotate
	// For example, rotate 1 deg per px scrolled
	const rotation = st;

	// Apply rotation
	circle.style.transform = `rotate(${rotation}deg)`;
});
