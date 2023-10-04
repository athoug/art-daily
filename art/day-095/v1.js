const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const k = 1 / 2;

function setup() {
	createCanvas(width, height);
	background('#129575');
	colorMode(HSB);
	smooth();
	strokeWeight(0.01);
}

function draw() {
	translate(halfW, halfH);
	scale(halfW, halfH);

	const t = frameCount / 20;
	const x = cos(k * t) * sin(t);
	const y = cos(k * t) * cos(t);

	stroke(255);
	line(0, 0, x, y);
}
