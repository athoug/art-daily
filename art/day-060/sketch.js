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
	strokeWeight(3);
}

function draw() {
	stroke(co, 80, 80, 20);

	const x0 = map(sin(a), -1, 1, 20, width - 20);
	const y0 = map(cos(a), -1, 1, 20, height - 20);
	const x1 = map(sin(b), -1, 1, 20, width - 20);
	const y1 = map(cos(b), -1, 1, 20, height - 20);

	line(x0, y0, x1, y1);

	a += 0.02;
	b += 0.05;

	co += 1;

	if (co > 100) {
		co = 0;
	}
}
