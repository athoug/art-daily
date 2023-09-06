const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

let amount = 300;
let x = [];
let y = [];
let z = [];

function setup() {
	createCanvas(width, height, WEBGL);
	background(31);
	smooth();
	noFill();
	stroke(255);
	strokeWeight(0.5);

	for (let i = 0; i < amount; i++) {
		x[i] = int(random(-150, 150));
		y[i] = int(random(-150, 150));
		z[i] = int(random(-150, 150));
	}
}

function draw() {
	rotateY(frameCount / 100);

	for (let i = 0; i < amount; i++) {
		point(x[i], y[i], z[i]);
	}
}
