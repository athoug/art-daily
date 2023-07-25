const width = 400;
const height = 400;

const halfW = width / 2;
const halfH = height / 2;

let r = 0;
let rect_r = 0.75;
let rect_r_2 = 2.5;
let red = 31;
let green = 31;
let blue = 31;

function setup() {
	createCanvas(width, height);
	smooth();
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(255);
	fill(red, green, blue);

	translate(200, 200);
	rotate(r);
	rect(0, 0, 10, 100);
	resetMatrix();

	translate(200, 200);
	rotate(r);
	rect(0, 0, 100, 10);
	resetMatrix();

	translate(200, 200);
	rotate(r);
	rotate(rect_r);
	rect(0, 0, 100, 10);
	resetMatrix();

	translate(200, 200);
	rotate(r);
	rotate(rect_r_2);
	rect(0, 0, 100, 10);
	resetMatrix();

	r += 0.05;

	if (random(100) > 90) {
		if (random(100) > 50) {
			red = random(255);
			green = random(255);
			blue = random(255);
		}
	}
}
