const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const pg = [];
const frames = 20;

function setup() {
	createCanvas(width, height);
	prepareGraphics();
}

function draw() {
	const currFrame = frameCount % frames; // 0 ... 19

	if (mouseIsPressed) {
		pg[currFrame].line(mouseX, mouseY, pmouseX, pmouseY);
	}

	image(pg[currFrame], 0, 0);
}

function keyPressed() {
	if (key == 's') {
		saveGif('my-sketch-####', frames, 'frames');
	}

	if (key == ' ') {
		prepareGraphics();
	}
}

function prepareGraphics() {
	for (let i = 0; i < frames; i++) {
		pg[i] = createGraphics(width, height);
		pg[i].clear(); // make graphic clear
		pg[i].background(30);
		pg[i].stroke(255);
		pg[i].strokeWeight(3);
	}
}
