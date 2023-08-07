const width = 400;
const height = 400;

let a = 0;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	noStroke();
	background(250);
}

function draw() {
	let x = map(sin(a * 1.7) * sin(a + 2), -1, 1, 0, width);
	let y = map(sin(a + 1.5) * sin(a * 1.4), -1, 1, 0, width);
	let c = map(sin(a) * sin(a * 0.75), -1, 1, 0, 100);
	let b = map(sin(a) * sin(a * 0.03), -1, 1, 10, 100);
	let w = map(sin(a * 1.1) * sin(a * 2.5), -1, 1, 3, 10);

	fill(c, 50, b);
	ellipse(x, y, w);

	a += 0.03;
}
