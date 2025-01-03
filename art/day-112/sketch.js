const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;
const circles = [];
const count = 12;
let colors;

function setup() {
	createCanvas(width, height);

	colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];

	for (let i = 0; i < count; i++) {
		const angle = (TWO_PI / count) * i;
		circles[i] = new Circle(angle, colors[i % 3]);
	}
}

function draw() {
	background(250);
	translate(halfW, halfH);

	push();
	blendMode(DIFFERENCE);
	for (let i = 0; i < count; i++) {
		circles[i].update();
		circles[i].display();
	}
	pop();
}
