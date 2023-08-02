const width = 400;
const height = 400;

let z = 0;

const margin = 40;
const size = 40;

function setup() {
	createCanvas(width, height);
	noStroke();
	colorMode(HSB);
}

function draw() {
	let x = 0;
	while (x < width - margin) {
		let y = 0;
		while (y < height - margin) {
			let c = 350 * noise(x / 500, y / 500, z);
			fill(c, 250, 250);
			ellipse(x + margin, y + margin, size);
			y += 40;
		}
		x += 40;
	}
	z += 0.02;
}
