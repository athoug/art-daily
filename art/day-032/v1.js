const width = 400;
const height = 400;

let seed = 0;

function setup() {
	createCanvas(width, height);
	background(255);
	smooth();
	noStroke();
	fill(31);
	rectMode(CENTER);
}

function draw() {
	background(255);

	translate(width * noise(seed + 10), height * noise(seed + 20));
	rotate(10 * noise(seed + 42));
	rect(0, 0, 200 * noise(seed + 20), 200 * noise(seed + 40));

	seed += 0.02;
}
