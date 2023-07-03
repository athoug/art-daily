const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
}

function draw() {
	stroke(0, random(255), 0); // RGB
	background(51); // makes the background a shade of black
	// the screen is 400 pixels wide and 400 pixels tall
	// lines start at the middle of the screen (200, 200)
	line(width / 2, height / 2, random(height), random(height));
}
