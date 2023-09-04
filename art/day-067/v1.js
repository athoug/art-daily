const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const curveCount = 10;

function setup() {
	createCanvas(width, height);
	smooth();
	noFill();
	frameRate(2);
}

function draw() {
	background(255);
	for (let i = 0; i < curveCount; i++) {
		bezier(
			width / 2,
			height,
			random(width),
			random(height),
			random(width),
			random(height),
			random(width),
			random(height)
		);
	}
}
