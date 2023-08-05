const width = 400;
const height = 400;

let x = 0;
let a = 0;

function setup() {
	createCanvas(width, height);
	background(51);
}

function draw() {
	stroke(255);
	strokeWeight(3);
	while (x < width) {
		let y = map(sin(a) * sin(a * 1.7) * sin(a * 1.8), -1, 1, 100, 250);

		point(x, y);

		x += 1;
		a += 0.03;
	}
}
