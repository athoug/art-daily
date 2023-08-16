const width = 500;
const height = 500;

let wave = [];

function setup() {
	createCanvas(width, height);

	for (let i = 0; i < width; i++) {
		const amount = map(i, 0, width, 0, PI);
		wave[i] = abs(cos(amount));
	}

	background(255);
	noLoop();
}

function draw() {
	let y1 = 0;
	let y2 = height / 3;
	for (let i = 0; i < width; i += 3) {
		stroke(wave[i] * 255);
		line(i, y1, i, y2);
	}

	y1 = y2;
	y2 = y1 + y1;
	for (let i = 0; i < width; i += 3) {
		stroke((wave[i] * 255) / 4);
		line(i, y1, i, y2);
	}

	y1 = y2;
	y2 = height;
	for (let i = 0; i < width; i += 3) {
		stroke(255 - wave[i] * 255);
		line(i, y1, i, y2);
	}
}
