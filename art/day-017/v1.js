const width = 400;
const height = 400;

const centerX = width / 2;
const centerY = height / 2;

let size = 100;

function setup() {
	createCanvas(width, height);
	noStroke();

	textAlign(CENTER, CENTER);
}

function draw() {
	background(31);

	circle(centerX, centerY, size);
	size += 1;

	text('click for reset', centerX, centerY);
}

function mousePressed() {
	size = 0;
}
