const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let capture;

function setup() {
	createCanvas(width, height);
	capture = createCapture(VIDEO);
	capture.size(320, 240);
	capture.hide();
	frameRate(10);
}

function draw() {
	// background(255);
	image(capture, random(width), random(height), 320, 240);
	// filter(INVERT);
}
