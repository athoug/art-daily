const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let amt = 50;

let x1 = [];
let y1 = [];
let x2 = [];
let y2 = [];

let c = [];

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	noStroke();
	rectMode(CORNERS);

	let i = 0;
	for (let x = 0; x < 5; x++) {
		for (let y = 0; y < 10; y++) {
			x1[i] = map(x, 0, 5, 40, width);
			x2[i] = x1[i] + 40;
			y1[i] = map(y, 0, 10, 50, height - 50);
			y2[i] = y1[i] + 25;
			c[i] = color(x * 20, y * 9, 90);
			i = i + 1;
		}
	}
}

function draw() {
	background(100);

	let found = -1;
	for (let i = 0; i < amt; i++) {
		fill(c[i]);
		rect(x1[i], y1[i], x2[i], y2[i]);

		if (mouseX > x1[i] && mouseX < x2[i] && mouseY > y1[i] && mouseY < y2[i]) {
			found = i;
		}
	}

	if (found >= 0) {
		if (mouseIsPressed) {
			xOffset = x2[found] - x1[found];
			yOffset = y2[found] - y1[found];

			x1[found] = lerp(x1[found], mouseX, 0.2);
			x2[found] = x1[found] + xOffset;
			y1[found] = lerp(y1[found], mouseY, 0.2);
			y2[found] = y1[found] + yOffset;
		}
		noFill();
		stroke(10);
		strokeWeight(2);
		rect(x1[found], y1[found], x2[found], y2[found]);
		noStroke();
	}
}
