const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x, dx;
let s1, s2, s3;

function preload() {
	soundFormats('mp3', 'ogg');
	s1 = loadSound('./data/sound-1.mp3');
	s2 = loadSound('./data/sound-2.mp3');
	s3 = loadSound('./data/sound-3.mp3');
}

function setup() {
	createCanvas(width, height);
	noStroke();
	x = 20;
	dx = 6;
}

function draw() {
	background(0, 42, 50);
	fill(random(200, 255), 0, 118);
	rect(x, 0, 5, height);
	x += dx;

	if (x < 1) {
		s1.play();
		x = 0;
		dx = 2;
	}

	if (x > width) {
		s2.play();
		x = width;
		dx = -3;
	}
}
