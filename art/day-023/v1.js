const width = 400;
const height = 400;

const halfW = width / 2;
const halfH = height / 2;

let r = 0;
let circle_size = 0;
let xPosition = 50;
let x = xPosition;

function setup() {
	createCanvas(width, height);
	background(31);
	smooth();
	noStroke();
}

function draw() {
	translate(halfW, halfH);
	rotate(r);
	fill(255);

	circle_size = random(5, 15);

	ellipse(x, 20, circle_size);

	r += 0.2;
	x = xPosition + r;

	if (x > halfW) {
		x = xPosition;
		r = 0;
		background(31);
	}
}
