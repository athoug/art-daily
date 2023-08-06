const width = 400;
const height = 400;

let x = 0;
let a = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	colorMode(HSB, 100);
	background(250);

	while (x < width) {
		let y = map(sin(a) * sin(a * 1.7) * sin(a * 1.9), -1, 1, 100, 300);
		let co = map(y, 100, 300, 90, 50);
		let w = map(y, 100, 300, 10, 1);

		strokeWeight(w);
		stroke(co, 50, 100);
		point(x, y);

		x += 1;
		a += 0.03;
	}
}

function draw() {}
