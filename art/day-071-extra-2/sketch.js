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
	noFill();
	stroke('#A9E5BB');

	const r = 200;

	for (let i = 0; i < amount; i++) {
		const a = random(TWO_PI);
		const b = random(TWO_PI);
		x[i] = sin(a) * cos(b) * r;
		y[i] = sin(a) * sin(b) * r;
		z[i] = cos(a) * r;
	}
}

function draw() {
	background(31);

	rotateY(frameCount / 100);
	const t = frameCount / 100;

	for (let i = 0; i < amount; i++) {
		push();
		translate(
			x[i] * noise(2, i, t),
			y[i] * noise(1, i, t),
			z[i] * noise(1, i, t)
		);
		ellipse(0, 0, 20, 20);
		pop();
	}
}
