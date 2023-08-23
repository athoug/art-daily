const width = 400;
const height = 400;

let x = [];
let y = [];
let move_x = [];
let move_y = [];

function setup() {
	createCanvas(width, height);
	smooth();
}

function draw() {
	fill(255, 10);
	noStroke();
	rect(0, 0, width, height);

	noFill();
	stroke('#ff5e5b');
	let i = 0;
	while (i < x.length) {
		const sz = random(10, 40);
		noFill();
		ellipse(x[i] + random(-3, 3), y[i] + random(-3, 3), sz, sz);

		x[i] += move_x[i];
		y[i] += move_y[i];

		if (x[i] > width) {
			x[i] = width;
			move_x[i] *= -1;
		}

		if (y[i] > height) {
			y[i] = height;
			move_y[i] *= -1;
		}

		if (x[i] < 0) {
			x[i] = 0;
			move_x[i] *= -1;
		}

		if (y[i] < 0) {
			y[i] = 0;
			move_y[i] *= -1;
		}

		i += 1;
	}
}

function mousePressed() {
	x.push(mouseX);
	y.push(mouseY);

	move_x.push(random(-2, 2));
	move_y.push(random(-2, 2));
}
