const width = 400;
const height = 400;

let n = 0;

function setup() {
	createCanvas(width, height);
	background(255);
	stroke(0);
	colorMode(HSB);
}

function draw() {
	background(255);
	let x = 0;
	let s = 0;
	while (x < width) {
		let i = 0;
		while (i < width / 2) {
			stroke(360 * noise(s), 255, 255);
			strokeWeight(5 * noise(s));
			let y = height * noise(s) * noise(n);
			line(x, 0, x, 50 + y * sin(n));

			s += 0.03;
			i += 20;
		}

		x += 20;
	}

	n += 0.05;
}
