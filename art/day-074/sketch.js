const width = 500;
const height = 500;
const halfW = width / 2;
const halfH = height / 2;

let s = 'press the mouse to see something';
let div;
function setup() {
	createCanvas(width, height);
	smooth();
	colorMode(HSB, 100);
	strokeWeight(2);

	div = createDiv(s);
	div.style('color', '#ccc', 'margin', 'auto', 'border', '1px solid red');
	noFill();
}

function draw_circ_grad(x, y, maxD) {
	const c1 = color(random(100), 100, 100);
	const c2 = color(random(100), 100, 30);

	for (let d = 0; d < maxD; d++) {
		const n = map(d, 0, maxD, 0, 1);
		const newC = lerpColor(c1, c2, n);
		stroke(newC);
		ellipse(x, y, d, d);
	}
}

function draw() {}

function mousePressed() {
	div.remove();
	draw_circ_grad(mouseX, mouseY, random(30, 200));
}

function keyPressed() {
	if (key.toLowerCase() == 'c') {
		background(255);
	}
}
