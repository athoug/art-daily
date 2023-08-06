const width = 400;
const height = 400;

let y = 0;
let a = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	colorMode(HSB, 100);
	background(250);

	while (y < height) {
		let x1 = map(sin(a) * sin(a * 1.3), -1, 1, 100, 300);
		let w = map(x1, 100, 300, 10, 1);

		let x2 = map(sin(a) * sin(a * 2), -1, 1, 0, 110);
		let w2 = map(x2, 0, 110, 1, 10);

		let x3 = map(sin(a) * sin(a * 1.5), -1, 1, 100, 400);
		let w3 = map(x3, 100, 400, 1, 10);

		strokeWeight(w);
		point(x1, y);

		strokeWeight(w2);
		point(x2, y);

		strokeWeight(w3);
		point(x3, y);

		y += 1;
		a += 0.03;
	}
}

function draw() {}
