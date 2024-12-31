const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;
let x;
let y;
let r = 100;
let theta = 45;
let s = 10;

function setup() {
	createCanvas(width, height);
	background(250);
	// frameRate(30);
	angleMode(DEGREES);
}

function draw() {
	translate(halfW, halfH);
	x = cos(theta) * r;
	y = sin(theta) * r;
	// the point of origin
	// ellipse(0, 0, 5, 5);
	ellipse(x, y, s, s);
	// point(x, y);

	theta += 1;
	r = random(50, 150);
	s = random(5, 20);
}
