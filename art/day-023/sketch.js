const width = 400;
const height = 400;

const halfW = width / 2;
const halfH = height / 2;

let r = 0;
let rotationDegree = 0.2;
let circleSize = 0;
let xPosition = 50;
let x = xPosition;

const colors = ['#B8B8D1', '#5B5F97', '#ffc145', '#FFFFFB', '#FF6B6C'];
let cFill = colors[0];

function setup() {
	createCanvas(width, height);
	background(255);
	smooth();
	noStroke();
}

function draw() {
	translate(halfW, halfH);
	rotate(r);

	cFill = colors[Math.round(random(colors.length - 1))];
	// console.log(cFill);
	fill(cFill);

	circleSize = random(5, 15);
	ellipse(x, 20, circleSize);

	r += rotationDegree;
	x = xPosition + r;

	if (x > halfW) {
		xPosition = random(10, 100);
		rotationDegree = random(0.1, 0.9);
		x = xPosition;
		r = 0;
		background(255);
	}
}
