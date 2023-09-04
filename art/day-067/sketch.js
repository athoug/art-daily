const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x = 0;
let colorShift = 50; // difference between colors

function setup() {
	createCanvas(width, height);
	smooth();
	background(255);
	colorMode(HSB);
}

function drawBezier(a) {
	stroke((x * 100 + (a / 80) * colorShift) % 255, 255, 255);
	bezier(
		width * noise(x, a),
		height * noise(x, a + 10),
		width * noise(x, a + 20),
		height * noise(x, a + 30),
		width * noise(x, a + 40),
		height * noise(x, a + 50),
		width * noise(x, a + 60),
		height * noise(x, a + 70)
	);
}

function draw() {
	noStroke();
	fill(255, 20);
	rect(0, 0, width, height);

	noFill();
	for (let i = 0; i < 10; i++) {
		drawBezier(i * 80);
	}

	x += 0.01;
}
