const width = 600;
const height = 600;

let counter = 0;
let x;
let y;
let breaker = 300;
let deg = 0.9;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	background(31);
	frameRate(10);

	x = random(50, 400);
	y = random(50, 200);
}

function draw_rect(count) {
	if (random(100) > 60) {
		return rect(x + count, y, 100, 25);
	}

	if (random(100) > 40) {
		return rect(x, y, 100, 25);
	}

	if (random(100) > 90) {
		return rect(x, y + count, 100, 25);
	}

	if (random(100) > 90) {
		return rect(x + count, y + count, 100, 25);
	}
}

function draw() {
	f = frameRate();
	console.log(f);
	if (f >= 10.3) {
		counter = 0;
		x = random(50, 400);
		y = random(50, 200);
		breaker = random(100, 400);
		deg = random();
		background(31);
	} else {
		while (counter < breaker) {
			fill(random(255));
			draw_rect(counter);
			rotate(deg);
			counter += 1;
		}
	}
}
