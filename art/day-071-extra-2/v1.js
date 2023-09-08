const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

const amount = 300;
const x = [];
const y = [];
const z = [];

function setup() {
	createCanvas(width, height, WEBGL);
	smooth();
	stroke('#A9E5BB');
	noFill();

	for (let i = 0; i < amount; i++) {
		x[i] = random(-150, 150);
		y[i] = random(-150, 150);
		z[i] = random(-150, 150);
	}
}

function draw() {
	background(31);

	rotateY(frameCount / 100);

	for (let i = 0; i < amount; i++) {
		push();
		translate(x[i], y[i], z[i]);
		ellipse(0, 0, 20, 20);
		pop();
	}
}
