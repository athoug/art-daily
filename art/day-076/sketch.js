const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let bg;
let d = 20;

function preload() {
	bg = loadImage('./assets/bg-p5.jpg');
}
function setup() {
	createCanvas(width, height);
	smooth();
	noFill();
	stroke('#B5FED9');
}

function draw() {
	background(bg);
	ellipse(mouseX, mouseY, d, d);

	if (mouseIsPressed) {
		d++;
	}
}

function mouseReleased() {
	loadPixels();
	bg.loadPixels();
	for (let i = 0; i < pixels.length; i++) {
		bg.pixels[i] = pixels[i];
	}
	bg.updatePixels();
	d = 20;
}
