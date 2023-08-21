const width = 400;
const height = 400;

const bg = '#18020c';
const purple = '#9590a8';
const green = '#e5ffde';

const diam = 100;
let a = 0;

function setup() {
	createCanvas(width, height);
	background(bg);
	smooth();
	noFill();
	noCursor();
}

function draw() {
	background(bg);

	const x = noise(a, 10) * width;
	const y = noise(a, 20) * height;

	const d = dist(x, y, mouseX, mouseY);

	if (d > diam) {
		strokeWeight(1);
	} else {
		strokeWeight(random(10));
	}

	stroke(purple);
	ellipse(x, y, diam, diam);

	stroke(green);
	ellipse(mouseX, mouseY, diam, diam);

	a += 0.01;
}
