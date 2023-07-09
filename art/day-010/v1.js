const width = 400;
const height = 400;

let fast_circle = 0;
let slow_circle = 0;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke(255);
	strokeWeight(4);
}

function draw() {
	background(51);
	ellipse(slow_circle, height / 2, 100, 100);
	slow_circle += 1;

	ellipse(fast_circle, height / 2, 100, 100);
	fast_circle += 5;

	if (fast_circle > width) {
		fast_circle = 0;
	}

	if (slow_circle > width) {
		slow_circle = 0;
	}
}
