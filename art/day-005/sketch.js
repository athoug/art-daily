// animation
// white lines on black background
// the lines begin on the left border and end on the right border

const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
	frameRate(30);
}

function draw() {
	background(51);
	stroke(255);
	strokeWeight(5);
	line(0, random(height), width, random(height));
}
