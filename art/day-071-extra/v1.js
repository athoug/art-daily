const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

const amount = 300;

function setup() {
	createCanvas(width, height, WEBGL);
	smooth();
	fill('#F3A712');
	stroke('#D8950F');
}

function draw() {
	background(31);

	rotateY(frameCount / 100);

	for (let i = 0; i < amount; i++) {
		push();
		rotateZ((TWO_PI * i) / amount);
		translate(100, 0, 0);
		rotateX(PI / 2);
		ellipse(0, 0, 50, 50);
		pop();
	}
}
