const body = document.body;
const themeSwitcher = document.getElementById('theme-switch');

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
