const width = 400;
const height = 400;

let r = 0;
const margin = 60;
const spaceBetweenObjects = 30;
let frameSaved = 0;
let canvasRef;

function setup() {
	canvasRef = createCanvas(width, height);
	smooth();
	ellipseMode(CORNER);
	noStroke();
}

function draw() {
	background('#4D42AB');
	let x = 0;
	while (x < 10) {
		let y = 0;
		while (y < 10) {
			color = map(y, 0, 10, 0, 255);
			fill(color, 199, 229);
			drr(
				margin + x * spaceBetweenObjects,
				margin + y * spaceBetweenObjects,
				15,
				r + sin(y) + cos(x)
			);
			y += 0.3;
		}
		x += 1;
		r += 0.01;
	}
}

function drr(x, y, s, sp) {
	translate(x, y);
	rotate(sp);
	ellipse(0, 0, s);
	resetMatrix();
}

function keyPressed() {
	if (key == 's') {
		frameSaved += 1;
		saveCanvas(canvasRef, `worm-${frameSaved}`, 'png');
	}
}
