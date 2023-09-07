const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

const pages = 200;
const x = [];
const y = [];
const z = [];

function setup() {
	createCanvas(width, height, WEBGL);
	smooth();
	noFill();
	stroke(255);
	strokeWeight(0.5);

	for (let p = 0; p < pages; p++) {
		x[p] = int(random(-150, 150));
		y[p] = int(random(-150, 150));
		z[p] = int(random(-150, 150));
	}
}

function draw() {
	background(31);
	translate(0, 0);
	rotateY(frameCount / 100);
	rotateZ(frameCount / 1000);

	for (let p = 0; p < pages; p++) {
		line(0, 0, 0, x[p], y[p], z[p]);
	}
}
