const width = 400;
const height = 400;

let a = 0;
let r = 0;

function setup() {
	createCanvas(width, height, WEBGL);
}

function draw() {
	background(80);
	translate(
		mouseX - width / 2,
		mouseY - height / 2,
		map(noise(a), 0, 1, -400, 400)
	);

	rotateY(r);
	box();

	a += 0.01;
	r += 0.05;
}
