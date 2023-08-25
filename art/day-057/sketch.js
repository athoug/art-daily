const width = 400;
const height = 400;

let x = 0;
let y = 0;
let r = 200;
let b = 100;
let s = 20;
let a = 0;

function setup() {
	createCanvas(width, height);
	noStroke();
}

function draw() {
	background(255);
	fill(r, 0, b);

	ellipse(x, y, s, s);

	x = lerp(x, mouseX, 0.1);
	y = lerp(y, mouseY, 0.1);

	r = map(x, 0, width, 100, 255);
	b = map(y, 0, height, 50, 200);

	s = map(x * noise(a), 0, width, 5, 100);

	a += 0.01;
}
