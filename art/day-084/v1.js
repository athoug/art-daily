const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x1 = 100;
let y1 = 150;
let x2 = 300;
let y2 = 200;

let bgColor;
let fgColor;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	rectMode(CORNERS);
	newColor();
}

function newColor() {
	const h = random(100);
	bgColor = color(h, 50, 30);
	fgColor = color(h, 80, 100);
	fill(fgColor);
	noStroke();
}

function isInside() {
	return mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2;
}

function draw() {
	background(bgColor);

	if (isInside() && mouseIsPressed) {
		newColor();
	}

	rect(x1, y1, x2, y2);
}
