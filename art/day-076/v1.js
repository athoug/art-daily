const width = 500;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let back_image;
let d = 20;

function preload() {
	back_image = loadImage('./assets/screenshot.png');
}
function setup() {
	createCanvas(width, height);
	smooth();
	noFill();
}

function draw() {
	background(back_image);
	ellipse(mouseX, mouseY, d, d);

	if (mouseIsPressed) {
		d++;
	}
}

function mouseReleased() {
	loadPixels();
	back_image.loadPixels();
	for (let i = 0; i < pixels.length; i++) {
		back_image.pixels[i] = pixels[i];
	}
	back_image.updatePixels();
	d = 20;
}
