const width = 400;
const height = 400;
let r;
let g;
let b;

let x1;
let y1;
let x2;
let y2;

function setup() {
	createCanvas(width, height);
	background(230);
	r = random(255);
	g = random(255);
	b = random(255);

	x1 = null;
	y1 = null;
	x2 = null;
	y2 = null;
}

function draw() {
	if (mouseIsPressed === true) {
	} else {
		if (x1 !== null && y1 !== null && x2 === null && y2 === null) {
			stroke(r, g, b);
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
