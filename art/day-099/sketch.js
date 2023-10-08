const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

function setup() {
	createCanvas(width, height);
	noStroke();
	rectMode(CENTER);
}

function draw() {
	background(0);
	fill(255, 255, 255);

	for (let y = 48; y < height - 43; y += 43) {
		for (let x = 48; x < width - 43; x += 27) {
			resetMatrix();
			translate(x, y);
			rotate(TWO_PI * noise(x / 120, y / 153, frameCount / 70));
			rect(0, 0, 8, 27);
		}
	}
}
