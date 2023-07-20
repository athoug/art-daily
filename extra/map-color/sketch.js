const width = 400;
const height = 400;

let r = 0;
let b = 255;

function setup() {
	createCanvas(width, height);
}

function draw() {
	r = map(mouseX, 0, width, 0, 255);
	b = map(mouseY, 0, width, 0, 255);
	background(r, 0, b);

	stroke(255, 0, 0);
	line(0, mouseY, width, mouseY);
	line(mouseX, 0, mouseX, height);
	fill(100, 0, 200);
	noStroke();
	ellipse(mouseX, mouseY, 24, 24);
}
