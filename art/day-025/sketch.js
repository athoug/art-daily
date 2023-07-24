const width = 400;
const height = 400;

let r = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	fill(31);
	rectMode(CENTER);
}

function draw() {
	background(255);

	translate(100, 100);
	rotate(r);
	rect(0, 0, 80, 80);
	resetMatrix();

	translate(300, 100);
	rotate(r);
	rect(0, 0, 80, 80);
	resetMatrix();

	translate(100, 300);
	rotate(r);
	rect(0, 0, 80, 80);
	resetMatrix();

	translate(300, 300);
	rotate(r);
	rect(0, 0, 80, 80);
	resetMatrix();

	r += 0.02;
}
