const width = 400;
const height = 400;

let col = 0;

function setup() {
	createCanvas(width, height);
}

function draw() {
	col = map(mouseX, 0, width, 0, 255);

	background(col);
	fill(100, 0, 200);
	ellipse(mouseX, 200, 24, 24);
}
