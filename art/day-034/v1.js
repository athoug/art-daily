const width = 400;
const height = 400;
let z = 0;

function setup() {
	createCanvas(width, height);
	noStroke();
	colorMode(HSB);
}

function draw() {
	let x = 0;
	while (x < width) {
		let y = 0;
		while (y < height) {
			let c = 255 * noise(x / 500, y / 500, z);
			fill(c, 255, 255);
			ellipse(x, y, 120, 120);
			y += 40;
		}
		x += 40;
	}

	z += 0.02;
}
