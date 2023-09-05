const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const curveCount = 30;

function setup() {
	createCanvas(width, height);
	smooth();
	noFill();
}

function draw() {
	background(255);

	const t = frameCount / 100;

	for (let i = 0; i < curveCount; i++) {
		bezier(
			halfW,
			height,
			halfW,
			noise(1, i, t) * height,
			noise(2, i, t) * width,
			noise(3, i, t) * height,
			noise(4, i, t) * width,
			noise(5, i, t) * height
		);
	}
}
