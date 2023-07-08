const width = 400;
const height = 400;
let x = 50;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke('#FF8000');
	strokeWeight(3);
}

function draw() {
	background('#051346');
	ellipse(x, 200, 50, 50);
	x += 1;

	if (x > width + 50) {
		x = 0;
	}
}
