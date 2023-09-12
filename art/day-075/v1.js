const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let bg;
let d = 20;

function preload() {
	bg = loadImage('data/big.png');
}
function setup() {
	createCanvas(width, height);
	smooth();
	noFill();
	stroke(255);
	strokeWeight(3);
}

function draw() {
	background(bg);
	ellipse(mouseX, mouseY, d, d);

	if (mouseIsPressed) {
		d++;
	}
}

function mouseReleased() {
	d = 20;
}
