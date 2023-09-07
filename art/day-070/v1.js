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
	background(31);
	noFill();
	stroke(255);
	strokeWeight(2);

	for (let i = 0; i < amount; i++) {
		const r = 150;
		const a = random(TWO_PI);
		const b = random(TWO_PI);

		x[i] = int(r * sin(a) * cos(b));
		y[i] = int(r * sin(a) * sin(b));
		z[i] = int(r * cos(a));
	}
}

function draw() {
	background(31);
	translate(0, 0);
	rotateY(frameCount / 100);

	for (let i = 0; i < amount; i++) {
		point(x[i], y[i], z[i]);
	}
}
