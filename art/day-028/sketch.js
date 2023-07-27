const width = 400;
const height = 400;

let r = 0;

const rect1BaseSize = 80;
const rect2BaseSize = 50;
const rect3BaseSize = 90;
const rect4BaseSize = 100;
const rect5BaseSize = 150;

let rect1size = rect1BaseSize;
let rect2size = rect2BaseSize;
let rect3size = rect3BaseSize;
let rect4size = rect4BaseSize;
let rect5size = rect5BaseSize;

let shrink1 = 1;
let shrink2 = 1;
let shrink3 = 1;
let shrink4 = 1;
let shrink5 = 1;

let red;
let green;
let blue;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	rectMode(CENTER);

	red = random(255);
	green = random(255);
	blue = random(255);
}

function draw() {
	background(255);

	fill(red, green, blue);
	draw_rect(100, 100, rect1size, -0.5);
	draw_rect(300, 100, rect2size, 2.1);
	draw_rect(100, 300, rect3size, 2.6);
	draw_rect(300, 300, rect4size, -0.4);
	draw_rect(200, 200, rect5size, 0.7);

	r += 0.03;

	scaleDown(
		rect1BaseSize,
		rect2BaseSize,
		rect3BaseSize,
		rect4BaseSize,
		rect5BaseSize
	);

	if (frameRate() >= 60 && frameRate() < 61) {
		red = random(255);
		green = random(255);
		blue = random(255);
	}
}

function draw_rect(x, y, rectSize, speed) {
	translate(x, y);
	rotate(r * speed);
	rect(0, 0, rectSize);
	resetMatrix();
}

function scaleDown(base1, base2, base3, base4, base5) {
	rect1size -= 0.5 * shrink1;

	if (rect1size == 0 || rect1size == base1) {
		shrink1 *= -1;
	}

	rect2size -= 0.1 * shrink2;

	if (rect2size <= 0 || rect2size == base2) {
		shrink2 *= -1;
	}

	rect3size -= 0.3 * shrink3;

	if (rect3size <= 0 || rect3size == base3) {
		shrink3 *= -1;
	}

	rect4size -= 0.6 * shrink4;

	if (rect4size <= 0 || rect4size == base4) {
		shrink4 *= -1;
	}

	rect5size -= 0.9 * shrink5;

	if (rect5size <= 0 || rect5size == base5) {
		shrink5 *= -1;
	}
}
