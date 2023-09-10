const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let c1;
let c2;
const maxD = 200;
let D = maxD;
let shrink = -0.5;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	noFill();
	strokeWeight(2);

	colorSetter();
}

function draw() {
	background(100, 30);

	for (let d = 0; d < D; d++) {
		const n = map(d, 0, D, 0, 1);
		const newC = lerpColor(c1, c2, n);
		stroke(newC);
		ellipse(mouseX, mouseY, d, d);
	}

	D += shrink;

	if (D < 50) {
		D = 50;
		shrink = 0.5;
	}
	if (D > maxD) {
		D = maxD;
		shrink = -0.5;
	}
}

function colorSetter() {
	c1 = color(random(100), 100, 100);
	c2 = color(random(100), 100, 30);
}

function mouseClicked() {
	colorSetter();
}
