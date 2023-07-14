const width = 400;
const height = 400;
let x = 0;

const halfHight = height / 2;

function setup() {
	createCanvas(width, height);
	background(255);
	stroke(31);
}

function draw() {
	line(x, halfHight, x, halfHight - 100);
	x += 1;

	if (x > width) {
		x = 0;
	}

	// deciding to change the color
	if (random(100) > 70) {
		// deciding which color to change it to
		if (random(100) > 50) {
			stroke(255);
		} else {
			stroke(31);
		}
	}
}
