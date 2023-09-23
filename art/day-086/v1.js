const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x = halfW;
let y = 50;
let dx = 5;
let dy = 5;
let r = 0;
let bounce;
let ball;

function preload() {
	soundFormats('mp3', 'ogg');
	bounce = loadSound('./assets/bounce.mp3');
	ball = loadImage('./assets/basketball.png');
}

function setup() {
	createCanvas(width, height);
	fill(255, 0, 0);
	smooth();
	noStroke();
	imageMode(CENTER);

	// bounce.start();
	getAudioContext().resume();
}

function draw() {
	background(255);

	translate(x, y);
	rotate(r);
	image(ball, 0, 0);

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
	resetMatrix();

	r += 0.05;
	// bounce.stop();
}
