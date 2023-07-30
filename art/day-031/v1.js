const width = 400;
const height = 400;

let xOff = 0;
let yOff = 0;

function setup() {
	createCanvas(width, height);
	stroke(21);
	strokeWeight(3);
	noFill();
}

function draw() {
	background(255);

	let x = noise(xOff) * width;
	line(x, 0, x, height);

	let y = noise(yOff) * height;
	line(0, y, width, y);

	ellipse(x, y, 20);

	xOff += 0.01;
	yOff += 0.02;
}
