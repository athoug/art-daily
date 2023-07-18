let r, g, b;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	noStroke();

	r = random(255);
	g = random(255);
	b = random(255);
}

function draw() {
	fill(r, g, b);
	circle(mouseX, mouseY, 25);
}

function mousePressed() {
	r = random(255);
	g = random(255);
	b = random(255);
}
