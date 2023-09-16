const width = 400;
const height = 534;
const halfW = width / 2;
const halfH = height / 2;

let img;
let d;
let imageSize;
let a = 0;

function preload() {
	img = loadImage('assets/istanbul.jpg');
}
function setup() {
	createCanvas(width, height);
	colorMode(HSB);
	image(img, 0, 0);

	d = pixelDensity();
	imageSize = 4 * (width * d) * (height * d);

	// frameRate(2);
}

function draw() {
	loadPixels();

	for (let i = 0; i < imageSize - 3; i++) {
		const h = pixels[i];
		const s = pixels[i + 1];
		const b = pixels[i + 2];
		const a = pixels[i + 3];

		pixels[i] = h + sin(i, a);
		pixels[i + 1] = s + noise(i + 1, a);
		pixels[i + 2] = b;
		pixels[i + 3] = a;

		// if (b > 200) {
		// 	pixels[i] = 255;
		// 	pixels[i + 1] = 255;
		// 	pixels[i + 2] = 255;
		// 	pixels[i + 3] = 255;
		// } else {
		// 	pixels[i] = 0;
		// 	pixels[i + 1] = 0;
		// 	pixels[i + 2] = 0;
		// 	pixels[i + 3] = 255;
		// }
	}

	updatePixels();

	a += 0.02;
}
