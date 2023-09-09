const width = 450;
const height = 450;
const halfW = width / 2;
const halfH = height / 2;

const pixels = [];

function setup() {
	createCanvas(width, height);

	for (let x = 0; x < width; x++) {
		for (let y = 0; y < 150; y++) {
			stroke(random(255));
			point(x, y);
		}
	}

	for (let x = 0; x < width; x++) {
		for (let y = 150; y < 200; y++) {
			stroke(random(217, 255), random(148, 200), random(100));
			point(x, y);
		}
	}

	for (let x = 0; x < width; x++) {
		for (let y = 200; y < height; y++) {
			stroke(random(255));
			point(x, y);
		}
	}
}
