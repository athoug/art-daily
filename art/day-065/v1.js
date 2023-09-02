const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let s = 50;
let grow = 0;
let n = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	fill('#724E91');
}

function draw() {
	background('#451F55');

	if (n % 60 == 0) {
		grow = 5;
	}

	if (s > 80) {
		s = 80;
		grow = -2;
	}

	if (s < 50) {
		s = 50;
		grow = 0;
	}

	ellipse(halfW, halfH, s, s);

	s += grow;
	n += 1;
}
