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

let bgColor;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	noStroke();
	rectMode(CORNERS);

	bgColor = color(random(100), 30, 20);

	for (let i = 0; i < amt; i++) {
		x1[i] = random(width);
		x2[i] = x1[i] + random(20, 100);
		y1[i] = random(height);
		y2[i] = y1[i] + random(20, 100);
		c[i] = color(random(100), 30, 100);
	}
}

function draw() {
	background(bgColor);

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
			x1[found] = random(width);
			x2[found] = x1[found] + random(20, 100);
			y1[found] = random(height);
			y2[found] = y1[found] + random(20, 100);
		} else {
			noFill();
			stroke(10);
			strokeWeight(2);
			rect(x1[found], y1[found], x2[found], y2[found]);
			noStroke();
		}
	}
}
