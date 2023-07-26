const width = 400;
const height = 400;

let r = 0;
let w = 25;
let h = 100;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	rectMode(CENTER);
}

function draw() {
	background(200, 0, 100);

	draw_rectangle(120, 200, w, h);
	draw_rectangle(170, 200, w, h);
	draw_rectangle(220, 200, w, h);
	draw_rectangle(270, 200, w, h);
	r += 0.03;
}

function draw_rectangle(x, y, w, h) {
	translate(x, y);
	rotate(r);

	fill(255);
	rect(0, 0, w, h, 25);
	resetMatrix();
}
