let r, g, b;
let size = 25;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	noStroke();

	r = random(255);
	g = random(255);
	b = random(255);
}

function draw() {
	size = random(50);

	fill(r, g, b);
	circle(mouseX, mouseY, size);
}

function mousePressed() {
	r = random(255);
	g = random(255);
	b = random(255);
}
