const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let cam;

function setup() {
	createCanvas(width, height);
	pixelDensity(1);
}

function draw() {
	background(51);

	let maxBri = 0;
	let theBrightestPixel = 1;

	loadPixels();

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const index = (x + y * width) * 4;

			pixels[index] = x;
			pixels[index + 1] = random(255);
			pixels[index + 2] = y;
			pixels[index + 3] = 255;
		}
	}

	updatePixels();
}
