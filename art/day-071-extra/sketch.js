const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

const amount = 300;

function setup() {
	createCanvas(width, height, WEBGL);
	smooth();
	noFill();
	stroke('#F3A712');
}

function draw() {
	background(31);

	rotateY(frameCount / 100);

	const t = frameCount / 100;

	for (let i = 0; i < amount; i++) {
		push();
		rotateZ((TWO_PI * i) / amount);
		rotateY(i * 0.2);
		translate(150, 0, 0);
		rotateZ(PI / 2);
		ellipse(0, 0, 50 * noise(i, t * 1.7), 50 * noise(i, t * 1.7));
		pop();
	}
}
