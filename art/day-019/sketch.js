const height = 400;
const width = 400;
const halfX = width / 2;
const halfY = height / 2;

let step = 1;
let h;
let s;
let b;
let size = 100;

colorMode(HSB);

function setup() {
	createCanvas(width, height);
	h = random(255);
	s = random(255);
	b = random(255);
	noFill();
	stroke(255, 100);
}

function draw() {
	background(h, s, b);

	let i = 0;
	if (mouseIsPressed) {
		// change background
		h = random(255);
		s = random(255);
		b = random(255);

		// maybe change step
		if (random(100) > 50) {
			step = random(5);
		}

		// maybe change size
		if (random(100) > 50) {
			size = random(50, 200);
		}
	}

	while (i < 80) {
		if (mouseIsPressed) {
			ellipse(width / 2, height / 2, size + i * step, size + i * step);
		} else {
			ellipse(width / 2, height / 2, size + i * step, size - i * step);
		}
		i += step;
	}
}
