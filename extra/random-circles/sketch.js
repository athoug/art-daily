let r, g, b;
let x, y;
let size;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(255);
}

function draw() {
	r = random(100, 255);
	g = random(100, 255);
	b = random(100, 255);

	x = random(width);
	y = random(height);

	size = random(50);

	fill(r, g, b, 100);
	circle(x, y, size);
}
