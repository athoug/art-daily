const width = 400;
const height = 400;
let canvasRef;

let r = 0;
let s = 18;
let frameSaved = 0;
let margins = 50;

function setup() {
	canvasRef = createCanvas(width, height);
	smooth();
	stroke(255);
	strokeWeight(3);
}

function draw() {
	background(100, 0, 200);

	let x = 0;
	while (x < 10) {
		let y = 0;
		while (y < 10) {
			draw_rotating_object(
				margins * 1.25 + x * 30,
				margins * 1.25 + y * 30,
				s,
				r + x + y
			);
			y += 1;
		}
		x += 1;
	}

	r += 0.02;
}

function draw_rotating_object(x, y, s, sp) {
	translate(x, y);
	rotate(sp);
	line(0, 0, s, s);
	resetMatrix();
}

function keyPressed() {
	if (key == 's') {
		frameSaved += 1;
		saveCanvas(canvasRef, `wave-${frameSaved}`, 'png');
	}
}
