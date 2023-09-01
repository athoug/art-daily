const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const s = 40;
let n = 0;
let d;
let r;
let c = 0;

function setup() {
	createCanvas(width, height);
	noStroke();
	frameRate(4);
	colorMode(HSB, 100);
	d = random(1, 11);
	r = int(random(9));
}

function draw() {
	background(100);

	for (let x = 0; x < width / s; x++) {
		for (let y = 0; y < height / s; y++) {
			fill(noise(c) * 100, noise(x) * 100, noise(y) * 100);
			if (n % d == r) {
				rect(x * s, y * s, s, s);
			}

			if (n % d == r + 3) {
				rect(x * s, y * s, s, s);
			}
			n += 1;

			c += 0.01;
		}
	}
	d = int(random(100));
	r = int(random(9));
}
