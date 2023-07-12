const width = 400;
const height = 400;

let x = width / 2;
let y = height / 2;
let size = 50;

let center = size / 2;
let move_x = 2;
let move_y = -1;

function setup() {
	createCanvas(width, height);
	noStroke();
	fill('#21fa90');
}

function draw() {
	background('#424651');

	ellipse(x, y, size, size);
	x += move_x;
	y += move_y;

	if (x > width - center) {
		move_x *= -1;
	}
	if (y > height - center) {
		move_y *= -1;
	}
	if (x < center) {
		move_x *= -1;
	}
	if (y < center) {
		move_y *= -1;
	}
}
