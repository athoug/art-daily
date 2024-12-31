const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;
let x;
let y;
let r = 0;
let theta = 45;
let s = 5;

function setup() {
	createCanvas(width, height);
	background(250);
	angleMode(DEGREES);
}

function draw() {
	translate(halfW, halfH);

	x = r * cos(theta);
	y = r * sin(theta);

	ellipse(x, y, s, s);

	theta += 1;
	r += 0.1;

	if (r > width / 2) {
		r = 0;
	}
}
