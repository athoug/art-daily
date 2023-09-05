const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const curveCount = 30;

function setup() {
	createCanvas(width, height);
	smooth();
	colorMode(HSB, 100);
	noFill();
}

function draw() {
	background(100);

	const t = frameCount / 100;

	for (let i = 0; i < curveCount; i++) {
		const h = map(i, 0, curveCount, 50, 100);
		stroke(h, 80, 80);
		bezier(
			halfW,
			height,
			noise(1, i, t) * width,
			noise(2, i, t) * height,
			noise(3, i, t) * width,
			noise(4, i, t) * height,
			noise(5, i, t) * width,
			noise(6, i, t) * height
		);

		stroke(h, 100, 100); // in HSB color mode
		const f = map(mouseX, 0, width, 0, 100);
		console.log(f);
		fill(`rgba(${f}, 100, 100, 0.7`);
		ellipse(noise(5, i, t) * width, noise(6, i, t) * height, 15, 15); // using the last x,y point from the bezier call
		noFill();
	}
}
