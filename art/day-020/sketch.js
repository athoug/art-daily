const width = 600;
const height = 600;

function setup() {
	createCanvas(width, height);
	background('#4D5382');
}

function draw() {
	fill(77, 83, 130, 10);
	rect(0, 0, width, height);
}

function keyPressed() {
	fill('#658E9C');
	textSize(random(20, 200));
	text(key, random(20, 500), random(50, 550));
}
