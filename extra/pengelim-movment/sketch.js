const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

function setup() {
	createCanvas(width, height);
	smooth();
}

function draw() {
	background(0);

	// plain circular motion
	//float angle = frameCount * 0.05;

	// change this to define which part of the circle we are at (up, down, left...)
	let angleOffset = 1.6;
	// change this to define how wide is the motion
	let angleSpread = 1.2;

	// polar coordinates
	// instead of having the angle increase forever, sine makes
	// it periodic.
	let angle = angleOffset + angleSpread * sin(frameCount * 0.05);
	let distance = 40;
	let x = width / 2 + distance * cos(angle);
	let y = height / 2 + distance * sin(angle);

	ellipse(x, y, 5, 5);
}
