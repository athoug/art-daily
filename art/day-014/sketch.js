const width = 400;
const height = 400;

let move = 1;
let rotateAngle = 1;

function setup() {
	createCanvas(width, height);
	rectMode(CENTER);
	fill('#CBC5EA');
	noStroke();
	centerX = width / 2;
	centerY = height / 2;

	frameRate(3);
}

function draw() {
	background(100, 0, 200);
	translate(centerX, centerY);

	rotate(move);
	move += rotateAngle;
	console.log(move);
	rect(90, 0, 25, 200, 75);
	rect(-90, 0, 25, 200, 75);
	rect(-30, 0, 25, 200, 75);
	rect(30, 0, 25, 200, 75);

	if (move > 5) {
		rotateAngle *= -1;
	}

	if (move < -5) {
		rotateAngle *= -1;
	}
}
