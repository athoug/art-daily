const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const drawCount = 150;

function setup() {
	createCanvas(width, height);
	rectMode(CENTER);
}

function draw() {
	background('#151515');

	for (let i = 0; i < drawCount; i++) {
		push();
		translate(width / 2, height / 2);
		rotate(i + frameCount / 30);
		glowingRect(
			(i % 5) * 25,
			(i % 4) * 15,
			120,
			10,
			'#A63D40',
			'#E9B872',
			mouseIsPressed
		);
		pop();
	}
}

function glowingRect(x, y, w, h, fillColor, glowColor, fxActive) {
	const c = color(glowColor);
	c.setAlpha(10);

	if (fxActive) {
		stroke(c);
		strokeWeight(4);
		rect(x, y, w, h);

		stroke(c);
		strokeWeight(9);
		rect(x, y, w, h);

		stroke(c);
		strokeWeight(16);
		rect(x, y, w, h);

		stroke(c);
		strokeWeight(25);
		rect(x, y, w, h);
	}

	noStroke();
	fill(fillColor);
	rect(x, y, w, h);
}
