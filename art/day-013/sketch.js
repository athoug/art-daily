const width = 400;
const height = 400;

let size = 50;

let x = width / 2;
let y = height / 2;

let x2 = (width + size * 2) / 2;
let y2 = (height + size * 2) / 2;

let x3 = (width - size * 2) / 2;
let y3 = (height - size * 2) / 2;

let x4 = (width + size * 3) / 2;
let y4 = (height + size * 3) / 2;

let move_x = 2;
let move_y = -1;

let move_x2 = -2;
let move_y2 = 1;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke('#21fa90');
	strokeWeight(3);
}

function draw() {
	background('#424651');

	ellipse(x, y, size, size);
	ellipse(x2, y2, size, size);
	ellipse(x3, y3, size, size);
	ellipse(x4, y4, size, size);

	x += move_x;
	y += move_y;
	x2 += move_x2;
	y2 += move_y2;
	x3 += move_x2;
	y3 += move_y2;
	x4 += move_x;
	y4 += move_y;

	if (x > width) {
		x = 0;
	}
	if (y > height) {
		y = 0;
	}
	if (x < 0) {
		x = width;
	}
	if (y < 0) {
		y = height;
	}
	if (x2 > width) {
		x2 = 0;
	}
	if (y2 > height) {
		y2 = 0;
	}
	if (x2 < 0) {
		x2 = width;
	}
	if (y2 < 0) {
		y2 = height;
	}

	if (x3 > width) {
		x3 = 0;
	}
	if (y3 > height) {
		y3 = 0;
	}
	if (x3 < 0) {
		x3 = width;
	}
	if (y3 < 0) {
		y3 = height;
	}

	if (x4 > width) {
		x4 = 0;
	}
	if (y4 > height) {
		y4 = 0;
	}
	if (x4 < 0) {
		x4 = width;
	}
	if (y4 < 0) {
		y4 = height;
	}
}
