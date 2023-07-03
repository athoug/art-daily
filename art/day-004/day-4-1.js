const width = 400;
const height = 400;
let r;
let g;
let b;

let x1;
let y1;

function setup() {
	createCanvas(width, height);
	background(230);
	r = random(255);
	g = random(255);
	b = random(255);

	x1 = null;
	y1 = null;
}

function draw() {
	stroke(r, g, b);
	if (mouseIsPressed === true) {
		if (x1 !== null && y1 !== null) {
			line(x1, y1, mouseX, mouseY);
		}
	}
}

function mousePressed() {
	if (x1 === null && y1 === null) {
		x1 = mouseX;
		y1 = mouseY;
	}
}
