const width = 400;
const height = 400;

let a = 0;
let b = 0;
let co = 0;

function setup() {
	createCanvas(width, height);
	background(255);
	colorMode(HSB, 100);
	smooth();
	strokeWeight(6);
}

function draw() {
	background(100);

	const x0 = map(sin(a), -1, 1, 20, width - 20);
	const y0 = map(cos(a), -1, 1, 20, height - 20);
	const x1 = map(sin(b), -1, 1, 20, width - 20);
	const y1 = map(cos(b), -1, 1, 20, height - 20);

	stroke(co, 80, 80);
	point(x0, y0);
	point(x1, y1);

	a += 0.05;
	b += 0.02;

	co += 1;

	if (co > 100) {
		co = 0;
	}
}
