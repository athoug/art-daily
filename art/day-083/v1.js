const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x = halfW;
let y = halfH;
let sz = 100;

let bgColor;
let bgH;
let currentWeight = 0;
let targetWeight = 0;
let currentAlpha = 0;
let targetAlpha = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	colorMode(HSB);
	noStroke();
	rectMode(CENTER);

	fill(random(255), 10, 255);
	bgH = random(255);
	bgColor = color(bgH, 50, 200);
	background(bgColor);
}

function draw() {
	background(bgColor);

	if (
		mouseX > x - sz / 2 &&
		mouseX < x + sz / 2 &&
		mouseY > y - sz / 2 &&
		mouseY < y + sz / 2
	) {
		if (mouseIsPressed) {
			cursor('grab');
			targetWeight = 10;
			x = lerp(x, mouseX, 0.2);
			y = lerp(y, mouseY, 0.2);
		} else {
			cursor(HAND);
			targetWeight = 5;
		}

		targetAlpha = 255;
	} else {
		cursor(ARROW);
		targetAlpha = 0;
		targetWeight = 0;
	}
	currentWeight = lerp(currentWeight, targetWeight, 0.2);
	strokeWeight(currentWeight);

	currentAlpha = lerp(currentAlpha, targetAlpha, 0.2);
	stroke(bgH, 70, 100, currentAlpha);

	rect(x, y, sz, sz);
}
