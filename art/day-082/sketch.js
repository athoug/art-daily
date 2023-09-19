const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let bgColor;
let x = halfW;
let y = halfH;
let sz = 100;

let targetWeight = 2;
let currentWeight = 2;

let targetAlpha = 0;
let currentAlpha = 0;

function setup() {
	createCanvas(width, height);
	colorMode(HSB);
	smooth();
	noStroke();

	fill(random(255), 150, 200);
	bgColor = color(random(255), 80, 255);
	background(bgColor);
}

function draw() {
	background(bgColor);

	if (dist(x, y, mouseX, mouseY) < sz / 2) {
		targetAlpha = 255;

		if (mouseIsPressed) {
			cursor('grab');
			targetWeight = 10;
			x = lerp(x, mouseX, 0.2);
			y = lerp(y, mouseY, 0.2);
		} else {
			cursor(HAND);
			targetWeight = 5;
		}
	} else {
		cursor(ARROW);
		targetAlpha = 0;
	}

	currentWeight = lerp(currentWeight, targetWeight, 0.2);
	strokeWeight(currentWeight);

	currentAlpha = lerp(currentAlpha, targetAlpha, 0.2);
	stroke(255, currentAlpha);

	ellipse(x, y, sz, sz);
}
