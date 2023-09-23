const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x = halfW;
let y = 50;
let dx = 5;
let dy = 5;
let s = 50;
let bounce;

function preload() {
	soundFormats('mp3', 'ogg');
	bounce = loadSound('./assets/bounce.mp3');
}

function setup() {
	createCanvas(width, height);
	fill(255, 0, 0);
	smooth();
	noStroke();

	// bounce.start();
	getAudioContext().resume();
}

function draw() {
	background(255);
	ellipse(x, y, s, s);

	x += dx;
	y += dy;

	if (x > width) {
		x = width;
		dx = -dx;
		bounce.play();
	}

	if (x < 0) {
		x = 0;
		dx = -dx;
		bounce.play();
	}

	if (y > height) {
		y = height;
		dy = -dy;
		bounce.play();
	}

	if (y < 0) {
		y = 0;
		dy = -dy;
		bounce.play();
	}

	// bounce.stop();
}
