const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

const amount = 80;
const x = [];
const y = [];
const z = [];

function setup() {
	createCanvas(width, height, WEBGL);
	smooth();
	noFill();
	stroke(0, 150, 0);

	for (let i = 0; i < amount; i++) {
		x[i] = int(random(-250, 250));
		y[i] = int(random(-250, 0));
		z[i] = int(random(-250, 250));
	}
}

function draw() {
	background(255);

	rotateY(map(mouseX, 0, width, 0, TWO_PI));

	const t = frameCount / 100;
	for (let i = 0; i < amount; i++) {
		strokeWeight(1);
		bezier(
			0,
			150,
			0,
			0,
			-150 * noise(1, i, t),
			0,
			x[i] * noise(2, i, t),
			y[i] * noise(3, i, t),
			z[i] * noise(4, i, t),
			x[i] * noise(5, i, t),
			y[i] * noise(6, i, t),
			z[i] * noise(7, i, t)
		);
		strokeWeight(8);
		point(x[i] * noise(5, i, t), y[i] * noise(6, i, t), z[i] * noise(7, i, t));
	}
}
