const width = 400;
const height = 400;

let change = 0;
let x = -5;
let y = -10;

function setup() {
	createCanvas(width, height);
	noFill();
	smooth();
	background(250);
	rectMode(CENTER);
}

function draw() {
	if (random(100) > 50) {
		stroke('#b1ff0a');
	} else {
		stroke('#315500');
	}

	let r = random(200);

	ellipse(200, 200, r);

	copy(
		0,
		0,
		width,
		height,
		x,
		y,
		width - 10 * noise(change),
		height - 10 * noise(change)
	);

	x += 0.02;
	y += 0.05;
	change += 0.03;

	if (x > 10) {
		x = -5;
	}
	if (y > 10) {
		y = -10;
	}
}
