const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let oldx;
let oldy;
let a;

function reset() {
	oldx = halfW;
	oldy = halfH;
	a = random(TWO_PI);
}

function setup() {
	createCanvas(width, height);
	background(255);
	colorMode(HSB, 100);
	smooth();
	noFill();
	reset();
}

function draw() {
	let newx = oldx + cos(a) * 5;
	let newy = oldy + sin(a) * 5;

	line(oldx, oldy, newx, newy);

	oldx = newx;
	oldy = newy;

	a += random(-0.4, 0.4);

	if (oldx < 0 || oldy < 0 || oldx > width || oldy > height) {
		reset();
	}
}
