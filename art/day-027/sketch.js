const width = 400;
const height = 400;

let r = 0;

let red;
let green;
let blue;

let count = 0;

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

	draw_rectangle(100, 100, 80);
	draw_rectangle(300, 100, 40);
	draw_rectangle(100, 300, 100);
	draw_rectangle(300, 300, 20);
	draw_rectangle(200, 200, 150);

	r += 0.03;
}

function draw_rectangle(x, y, size) {
	translate(x, y);
	rotate(r);

	if (random(100) > 95) {
		if (random(100) > 95) {
			red = random(255);
			green = random(255);
			blue = random(255);
		}
	}

	fill(red, green, blue);
	rect(0, 0, size);
	resetMatrix();
}
