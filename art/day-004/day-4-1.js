const width = 400;
const height = 400;
let r;
let g;
let b;

let x1;
let y1;
let x2;
let y2;

let lines;
let thickness;

function setup() {
	createCanvas(width, height);
	background(230);
	r = random(255);
	g = random(255);
	b = random(255);
	thickness = random(15);

	x1 = null;
	y1 = null;
	x2 = null;
	y2 = null;

	lines = [];
}

function draw() {
	if (mouseIsPressed === true) {
		if (x1 !== null && y1 !== null && x2 !== null && y2 !== null) {
			data = {
				x1,
				y1,
				x2,
				y2,
				r,
				g,
				b,
				thickness,
			};
			lines.push(data);

			// reset the values
			x1 = null;
			y1 = null;
			x2 = null;
			y2 = null;
			r = random(255);
			g = random(255);
			b = random(255);
			thickness = random(15);
		}
	} else {
		if (x1 !== null && y1 !== null && x2 === null && y2 === null) {
			background(230);
			stroke(r, g, b);
			strokeWeight(thickness);
			line(x1, y1, mouseX, mouseY);
		}
	}

	if (lines.length > 0) {
		for (let i = 0; i < lines.length; i++) {
			stroke(lines[i].r, lines[i].g, lines[i].b);
			strokeWeight(lines[i].thickness);
			line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
		}
	}
}

function mousePressed() {
	if (x1 === null && y1 === null) {
		x1 = mouseX;
		y1 = mouseY;
	} else if (x1 !== null && y1 !== null && x2 === null && y2 === null) {
		x2 = mouseX;
		y2 = mouseY;
	}
}
