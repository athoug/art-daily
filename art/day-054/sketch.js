const width = 400;
const height = 400;

const x = [];
const y = [];
const s = [];

function setup() {
	createCanvas(width, height);
	background(255);
	noStroke();
	smooth();
}

function draw() {
	background(255);

	let i = 0;
	while (i < x.length) {
		if (random(20) > 17) {
			fill(252, 109, 171);
		} else {
			fill(192, 76, 253);
		}

		ellipse(x[i], y[i], s[i], s[i]);

		x[i] += random(-2, 2);
		y[i] += random(-2, 2);

		i += 1;
	}
}

function mousePressed() {
	x.push(mouseX);
	y.push(mouseY);
	s.push(random(1, 30));
}
