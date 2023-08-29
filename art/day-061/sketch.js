const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let a = 0;
function setup() {
	createCanvas(width, height);
	smooth();
	strokeWeight(3);
	colorMode(HSB, 100);
	console.log(halfW / 2);
}

function draw() {
	const r = random(150, 180);
	let x = halfW + cos(a) * r;
	let y = halfH + sin(a) * r;
	let co = map(x, 0, halfW, 10, 40);

	stroke(co, 80, 80);
	point(x, y);

	const r2 = random(50, 80);
	let x1 = halfW + cos(a) * r2;
	let y1 = halfH + sin(a) * r2;
	let co1 = map(x, 0, halfW / 2, 40, 80);

	stroke(co1, 80, 80);
	point(x1, y1);

	a += 0.1;
}
