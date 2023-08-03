const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
	background(31);

	// lines to show the different functions we use to scatter objects
	stroke(100);
	line(0, 90, width, 90);
	line(0, 190, width, 190);
	line(0, 290, width, 290);

	stroke(255);
	let x = 0;
	while (x < width) {
		point(x, 90 + random(-10, 10)); // random(): random number between -10 and 10
		point(x, 180 + 40 * noise(x / 10)); // noise(): a random number between 0 and 1
		point(x, 290 + 20 * sin(x / 10)); // sin(): a random number between -1 and 1

		x += 1;
	}
}

function draw() {}
