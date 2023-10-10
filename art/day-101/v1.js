const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let from;
let to;

function setup() {
	createCanvas(width, height);
	noStroke();
	fill(255);
	background('#360568');
	rectMode(CENTER);

	from = color('#9AC6C5');
	to = color('#A5E6BA');
}

function drawSquares(x, y, sz) {
	fill(lerpColor(from, to, random(1)), 100);
	rect(x, y, sz, sz);

	if (sz > 50) {
		let nx, ny;
		nx = x;
		ny = y - sz / 2;
		drawSquares(nx, ny, sz / 2);

		nx = x + sz / 2;
		ny = y;
		drawSquares(nx, ny, sz / 2);

		nx = x - sz / 2;
		ny = y;
		drawSquares(nx, ny, sz / 2);

		nx = x;
		ny = y + sz / 2;
		drawSquares(nx, ny, sz / 2);
	}
}

function draw() {
	background('#360568');
	const x = halfW;
	const y = halfH;
	const sz = halfW;
	drawSquares(x, y, sz);

	resetMatrix();
	translate(halfW, halfH);
	rotate(frameCount / 10);
	console.log(frameCount);
}
