const width = 500;
const height = 500;

const starCount = 100;

const x = [];
const y = [];
const z = [];

const x1 = [];
const y1 = [];
const z1 = [];

const s = [];
const w = [];

function setup() {
	createCanvas(width, height, WEBGL);
	background(10);
	smooth();

	let i = 0;
	while (i < starCount) {
		x[i] = random(0, width);
		y[i] = random(0, height);
		z[i] = random(0, width * 2 - height);

		x1[i] = random(0, width);
		y1[i] = random(0, height);
		z1[i] = random(0, width * 2 - height);

		s[i] = random(1, 3);
		w[i] = random(1, 8);

		i += 1;
	}
}

function draw() {
	translate(-width / 2, -height / 2, 0); //moves our drawing origin to the top left corner
	box();
	background(30);

	let n = 0;
	while (n < starCount) {
		stroke(random(2 * n), random(1));
		stroke(255);
		strokeWeight(w[n]);
		point(x[n], y[n], z[n]);
		point(x1[n], y1[n], z1[n]);

		y[n] -= s[n];
		x[n] -= s[n];
		z[n] -= s[n];

		y1[n] += s[n];
		x1[n] += s[n];
		z1[n] += s[n];

		if (x[n] < 0) {
			x[n] = width;
			x1[n] = 0;
		}

		if (y[n] < 0) {
			y[n] = height;
			y1[n] = 0;
		}

		if (z[n] < 0) {
			z[n] = width * 2 - height;
			z1[n] = 0;
		}

		n += 1;
	}
}
