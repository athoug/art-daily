const width = 400;
const height = 400;

let seed = 0;

function setup() {
	createCanvas(width, height);
	smooth();
}

function draw() {
	background(255);

	cir(600, 0.006, 245, 100, 90);
	cir(500, 0.005, 200, 200, 80);
	cir(400, 0.004, 160, 10, 200);
	cir(300, 0.003, 120, 100, 10);
	cir(200, 0.002, 80, 10, 200);
	cir(100, 0.001, 40, 100, 200);

	seed += 0.02;
}

function cir(circleSize, factor, fillA = 0, fillB = 0, fillC = 0) {
	const rand = random(5);
	const x = noise(seed * factor, circleSize) * circleSize * noise(seed + 10);

	fill(
		noise(1, seed * factor) * fillA,
		noise(2, seed * factor) * fillB,
		noise(3, seed * factor) * fillC,
		99
	);
	ellipse(width / 2, height / 2, x, x);
}
