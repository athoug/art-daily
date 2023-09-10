const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let c1;
let c2;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	frameRate(1);
}

function draw() {
	c1 = color(random(100), 100, 100);
	c2 = color(random(100), 100, 30);

	for (let y = 0; y < height; y++) {
		const n = map(y, 0, height, 0, 1);
		const newC = lerpColor(c1, c2, n);
		stroke(newC);
		line(0, y, width, y);
	}
}
