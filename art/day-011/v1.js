const width = 400;
const height = 400;

let fast_circle = 0;
let slow_circle = 0;
let slow_circle_size;
let slow_circle_stroke;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke(255);
	strokeWeight(4);
	// frameRate(10);
}

function draw() {
	background(51);

	slow_circle_size = 100;
	slow_circle_stroke = 255;

	if (random(10) > 9.5) {
		slow_circle_size = 110;
		slow_circle_stroke = '#aa0000';
	}

	stroke(slow_circle_stroke);
	ellipse(slow_circle, height / 2, slow_circle_size, slow_circle_size);
	slow_circle += 1;

	stroke(255);
	ellipse(fast_circle, height / 2, 100, 100);
	fast_circle += 5;

	if (fast_circle > width) {
		fast_circle = 0;
	}

	if (slow_circle > width) {
		slow_circle = 0;
	}
}
