const width = 400;
const height = 400;

let x = 200;
let y = 200;

// the problem
// I want to animate the square without a trail but also want to draw circles
function setup() {
	createCanvas(width, height);
	background(51);
}

function draw() {
	background(51);
	x += random(-5, 5);
	y += random(-5, 5);

	fill(255, 200);
	stroke(255);
	rectMode(CENTER);
	rect(x, y, 20, 20);

	if (mouseIsPressed) {
		fill(255, 150);
		noStroke();
		ellipse(mouseX, mouseY, 60, 60);
	}
}
