const width = 400;
const height = 400;

let a = 0;

function setup() {
	createCanvas(width, height);
	background(250);
	smooth();
	colorMode(HSB);
}

function draw() {
	drawCircleGrid(0, 10);
	drawCircleGrid(0.25, 40);
	drawCircleGrid(0.5, 70);
	drawCircleGrid(0.75, 100);
	drawCircleGrid(1, 130);
	drawCircleGrid(1.25, 170);

	a += 0.03;
}

function drawCircleGrid(change, margin) {
	let x = map(sin(a - change), -1, 1, margin, width - margin);
	let y = map(cos(a - change), -1, 1, margin, height - margin);

	ellipse(x, y, 20);
}
