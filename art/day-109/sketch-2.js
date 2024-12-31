const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;
let x;
let y;
let r = 100;
let theta = 45;
let s = 10;
let time = 1;

function setup() {
	createCanvas(width, height);
	background(250);
	// frameRate(30);
	angleMode(DEGREES);
}

function draw() {
	translate(halfW, halfH);

	const noiseLevel = noise(0.005 * frameCount);

	theta = 360 * noiseLevel;
	r = halfW * noiseLevel;
	s = 20 * noise(0.005 * frameCount + 10000);

	x = cos(theta) * r;
	y = sin(theta) * r;
	ellipse(x, y, s, s);
}
