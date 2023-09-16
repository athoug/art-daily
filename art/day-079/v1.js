const width = 400;
const height = 534;
const halfW = width / 2;
const halfH = height / 2;

let img;
let d;
let imageSize;

function preload() {
	img = loadImage('assets/istanbul.jpg');
}
function setup() {
	createCanvas(width, height);
	image(img, 0, 0);

	d = pixelDensity();
	imageSize = 4 * (width * d) * (height * d);

	frameRate(2);
}

function draw() {
	loadPixels();

	for (let i = 0; i < imageSize - 3; i++) {
		const r = pixels[i];
		const g = pixels[i + 1];
		const b = pixels[i + 2];
		const a = pixels[i + 3];

		pixels[i] = g;
		pixels[i + 1] = r;
		pixels[i + 2] = b;
		pixels[i + 3] = a;
	}

	updatePixels();
}
