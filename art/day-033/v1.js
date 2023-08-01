const width = 400;
const height = 400;

let time = 0;
const offset = height / 2;

function setup() {
	createCanvas(width, height);
	stroke('#2f4858');
}

function draw() {
	background('#86BBD8');

	let x = 0;
	while (x < width) {
		line(x, offset + 50 * noise(x / 100, time), x, height);

		x += 1;
	}

	time += 0.02;
}
