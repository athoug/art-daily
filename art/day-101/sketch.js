const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

function setup() {
	createCanvas(width, height);
	noStroke();
}

function draw() {
	background(0);
	resetMatrix();
	translate(halfW, halfH);
	rectMode(CENTER);

	for (let i = 0; i < 32; i++) {
		fill((i % 2) * 250);
		rect(0, 0, 500, 500);
		rotate(frameCount / 100);
		scale(0.915);
	}
}
