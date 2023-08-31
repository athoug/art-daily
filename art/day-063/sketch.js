const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let oldx;
let oldy;
let a;
let w;

function resetData() {
	oldx = halfW;
	oldy = halfH;
	a = random(TWO_PI);
	w = 1;
}

function setup() {
	createCanvas(width, height);
	background(255);
	colorMode(HSB, 100);
	smooth();
	noFill();
	resetData();
}

function draw() {
	stroke(random(30, 35), random(100), noise(w, a) * 100);
	strokeWeight(w);
	let newx = oldx + cos(a) * 5;
	let newy = oldy + sin(a) * 5;

	line(oldx, oldy, newx, newy);

	oldx = newx;
	oldy = newy;

	a += random(-0.4, 0.4);
	w += 0.05;

	if (oldx < 0 || oldx > width || oldy < 0 || oldy > height) {
		resetData();
	}
}
