// animation
// white lines on black background
// the lines begin on the left border and end on the right border
// the lines must be horizontal.

const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
	frameRate(10);
}

function draw() {
	background(51);
	stroke(255);
	strokeWeight(random(10));
	let y = random(height);
	line(0, y, width, y);
}
