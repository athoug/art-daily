const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let a = 0;
const s = 10;

function setup() {
	createCanvas(width, height);
	smooth();
}

function draw() {
	let r = random(150, 180);
	let x = halfW + cos(a) * r;
	let y = halfH + sin(a) * r;

	ellipse(x, y, s, s);

	a += 0.1;

	if (a > TWO_PI) {
		noLoop();
	}
}
