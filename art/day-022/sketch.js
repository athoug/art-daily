const width = 400;
const height = 400;

const colors = ['#B8B8D1', '#5B5F97', '#ffc145', '#FFFFFB', '#FF6B6C'];
let r = 0;

let circle_size;
let bg;
let color;
let x = 10;

function setup() {
	createCanvas(width, height);
	bg = generateRandom(colors, 0, colors.length, 1);
	color = generateRandom(colors, 0, colors.length, bg);

	background('bg', bg);
	background('color', color);

	smooth();
	noStroke();

	console.log(colors[color]);
}

function draw() {
	fill(colors[color]);
	rotate(r);

	circle_size = random(5, 15);
	circle(x + r, 10, circle_size);

	r += 0.2;
	x = r;
	console.log('r', r);
	console.log('x', x);

	if (x > 250) {
		x = 10;
		r = 0;
		background(colors[bg]);
	}
}

// this function is thanks to Anas Jame
// https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values#:~:text=it%20should%20be%20or%20instead%20of%20and
function generateRandom(list = [], min = 0, max, excluded_num) {
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num === excluded_num ? generateRandom(min, max) : num;
}
