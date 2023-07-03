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
	r = random(255);
	g = random(255);
	b = random(255);

	x1 = 0;
	y1 = 0;
	x2 = 0;
	y2 = 0;
}

function draw() {
	stroke(r, g, b); // RGB

	if (mouseIsPressed === true) {
	} else {
		if (x1 !== 0 && y1 !== 0) {
			line(x1, y1, mouseX, mouseY);
		}
	}
}

function mousePressed() {
	if (x1 === 0 && y1 === 0) {
		x1 = mouseX;
		y1 = mouseY;
	}
}
