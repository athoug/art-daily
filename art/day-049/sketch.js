const width = 500;
const height = 500;

const halfW = width / 2;
const halfH = height / 2;

let distances = [];
let maxDistance;
let spacer;
let w;
let n;

function setup() {
	createCanvas(width, height);
	maxDistance = dist(halfW, halfH, width, height); // get the distance between the two points

	for (let x = 0; x < width; x++) {
		distances[x] = []; // create the nested array
		for (let y = 0; y < height; y++) {
			const distance = dist(halfW, halfH, x, y);
			distances[x][y] = (distance / maxDistance) * 255;
		}
	}

	spacer = 10;
	w = 5;
	n = 0;

	noStroke();
	colorMode(HSB, 255);
}

function draw() {
	background(255);

	for (let x = 0; x < width; x += spacer) {
		for (let y = 0; y < height; y += spacer) {
			const c = distances[x][y];
			const mx = map(mouseX, 0, width, 0, 10);
			const my = map(mouseY, 0, height, 0, 10);
			fill(c * noise(n + mx + my), 200, 200);
			ellipse(x + spacer / 2, y + spacer / 2, w + mx, w + my);
		}
	}

	n += 0.03;
}
