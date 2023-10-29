const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let cam;

function setup() {
	createCanvas(width, height);
	pixelDensity(1);
	// cam = createCapture(VIDEO);
	// cam.size(width, height);
	// cam.hide();
}

function draw() {
	background(51);

	let maxBri = 0;
	let theBrightestPixel = 1;
	// cam.loadPixels();

	// for (let i = 0; i < cam.pixels.length; i++) {
	// console.log(i);
	// }
	//
	// cam.pixels[4] = 255;
	// cam.pixels[5] = 0;
	// cam.pixels[6] = 255;
	// cam.pixels[7] = 255;

	// cam.updatePixels();
	// image(cam, 0, 0, width, height);

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
