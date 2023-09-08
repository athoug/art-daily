const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

const amount = 100;
const x = [];
const y = [];
const z = [];

function setup() {
	createCanvas(width, height, WEBGL);
	smooth();
	noFill();
	stroke(0, 155, 0);

	for (let i = 0; i < amount; i++) {
		x[i] = int(random(-150, 150));
		y[i] = int(random(-140, 0));
		z[i] = int(random(-150, 150));
	}
}

function draw() {
	background(255);
	rotateY(map(mouseX, 0, width, 0, TWO_PI));

	// box(300);

	for (let i = 0; i < amount; i++) {
		strokeWeight(1);
		bezier(0, 150, 0, 0, -150, 0, x[i], y[i], z[i], x[i], y[i], z[i]);
		strokeWeight(8);
		point(x[i], y[i], z[i]);
	}
}
