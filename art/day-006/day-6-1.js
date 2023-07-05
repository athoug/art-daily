// animation
// white lines on black background
// the lines begin on the top border and end on the bottom border
// the lines must be vertical.

const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
	frameRate(10);
}

function draw() {
	// background(51);
	// stroke(255);
	background(255);
	stroke(51);
	strokeWeight(random(10));
	let x = random(width);
	line(x, 0, x, height);
}
