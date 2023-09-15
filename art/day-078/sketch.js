const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let a = 0;
let d;
let imageSize;

const message = 'my mind is a bit scattered';
const textXposition = halfW - message.length * 4;
const textC = '#F4D35E';

function setup() {
	createCanvas(width, height);

	d = pixelDensity();
	imageSize = 4 * (width * d) * (height * d);
}

function draw() {
	loadPixels();
	for (let i = 0; i < imageSize; i += 4) {
		c = color(random(255));
		pixels[i] = red(c);
		pixels[i + 1] = green(c);
		pixels[i + 2] = blue(c);
		pixels[i + 3] = alpha(c);
	}
	updatePixels();

	textSize(18);
	stroke(textC);
	fill(textC);
	text(message, textXposition, halfH);

	a += 0.02;
}
