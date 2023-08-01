const width = 400;
const height = 400;

let time = 0;
let strokeColor = 0;

function setup() {
	createCanvas(width, height);
}

function draw() {
	let x = 0;

	if (random(100) > 95) {
		if (random(100) > 50) {
			strokeColor = 0;
		} else {
			strokeColor = 255;
		}
	}
	while (x < width) {
		stroke(strokeColor);
		point(x, height * noise(x / 100, time));

		x += 1;
	}

	time += 0.02;
}
