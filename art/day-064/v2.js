const width = 400;
const height = 400;

const boxes = [];
const s = 40;

let n = 0;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	frameRate(2);
	noStroke();

	for (let x = 0; x < width / s; x++) {
		for (let y = 0; y < height / s; y++) {
			boxes.push({
				x: x * s,
				y: y * s,
				color: {
					h: random(100),
					s: random(100),
				},
			});
		}
	}
}

function draw() {
	background(100);

	if (n % 2) {
		const pixels = int(random(10, boxes.length));
		let i = 0;
		const coordinates = [];
		let pixel;

		while (i < pixels) {
			do {
				pixel = int(random(boxes.length));
			} while (coordinates.includes(pixel));
			coordinates.push(pixel);
			i += 1;
		}

		coordinates.forEach((item) => {
			fill(boxes[item].color.h, boxes[item].color.s, 100);
			rect(boxes[item].x, boxes[item].y, s, s);
		});
	}

	n += 1;
}
