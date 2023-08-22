const width = 400;
const height = 400;

const x = [];
const y = [];
let a = 0;

function setup() {
	createCanvas(width, height);
}

function draw() {
	let i = 0;

	while (i < x.length) {
		point(x[i], y[i]);

		y[i] += noise(a * 1.7);
		x[i] += random(-2, 2);

		i += 1;
	}

	a += 0.01;
}

function mousePressed() {
	x.push(mouseX);
	y.push(mouseY);
}
