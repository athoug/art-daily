const width = 400;
const height = 400;

let x = 0;
let y = 0;

let destX = 0;
let destY = 0;

let x2 = 0;
let y2 = 0;

const red = '#e4572e';
const cyan = '#17BEBB';
const yellow = '#FFC914';

let diam1;
let diam2;

let c1 = red;
let c2 = cyan;

function setup() {
	createCanvas(width, height);
	noStroke();

	destX = random(width);
	destY = random(height);
}

function draw() {
	background(255);

	fill(c1);
	ellipse(x, y, 20, 20);

	x = lerp(x, destX, 0.1);
	y = lerp(y, destY, 0.1);

	const d = dist(x, y, destX, destY);

	if (d < 1) {
		destX = random(width);
		destY = random(height);
	}

	if (d < 50) {
		diam1 = 100 - d;
		stroke(c1);
		noFill();
		ellipse(x, y, diam1, diam1);
		noStroke();
	}

	fill(c2);
	ellipse(x2, y2, 20, 20);

	x2 = lerp(x2, mouseX, 0.1);
	y2 = lerp(y2, mouseY, 0.1);

	const d2 = dist(x2, y2, mouseX, mouseY);

	if (d2 < 50) {
		diam2 = 100 - d2;
		stroke(c2);
		noFill();
		ellipse(x2, y2, diam2, diam2);
		noStroke();
	}

	const touching = dist(x, y, x2, y2);

	if (touching > diam2 || touching > diam1) {
		strokeWeight(1);
		c1 = red;
		c2 = cyan;
	} else {
		strokeWeight(random(10));
		c1 = yellow;
		c2 = yellow;
	}
}
