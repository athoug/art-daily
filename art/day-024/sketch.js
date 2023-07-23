const width = 400;
const height = 400;

const halfW = width / 2;
const halfH = height / 2;

let red;
let green;
let blue;

let r = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	rectMode(CENTER);

	red = random(0, 100);
	green = random(0, 100);
	blue = random(0, 100);

	background(red, green, blue);

	console.log('hi');
}

function draw() {
	fill(red, green, blue, 10);
	rect(halfW, halfH, width, height);
	translate(mouseX, mouseY);
	rotate(r);
	fill(255);
	rect(0, 0, 100, 100);
	r += 0.05;
}
