const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

// rose curve
// https://en.wikipedia.org/wiki/Rose_(mathematics)
let k = 1 / 2;
const margin = 10;
const sw = 0.02;

function setup() {
	createCanvas(width, height);
	background('#129575');
	colorMode(HSB);
	smooth();
	strokeWeight(sw);
}

function draw() {
	translate(halfW, halfH);
	scale(halfW - margin, halfH - margin);

	const t = frameCount / 20;
	const x = cos(k * t) * sin(t);
	const y = cos(k * t) * cos(t);

	stroke(255);
	point(x, y);
}

function mouseClicked() {
	background(random(255), random(255), random(255));

	n = random(1, 8);
	d = random(1, 10);
	k = n / d;
}
