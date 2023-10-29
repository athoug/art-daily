const width = 640;
const height = 480;
const halfW = width / 2;
const halfH = height / 2;

let cam;
let vScale = 16;

function setup() {
	createCanvas(width, height);
	pixelDensity(1);

	cam = createCapture(VIDEO);
	cam.size(width / vScale, height / vScale);
	cam.hide();
}

function draw() {
	background(51);

	cam.loadPixels();
	loadPixels();

	for (let y = 0; y < cam.height; y++) {
		for (let x = 0; x < cam.width; x++) {
			const index = (cam.width - x + 1 + y * cam.width) * 4;

			const r = cam.pixels[index];
			const g = cam.pixels[index + 1];
			const b = cam.pixels[index + 2];

			const bright = (r + b + b) / 3;

			fill(bright);
			rect(x * vScale, y * vScale, vScale, vScale);
		}
	}
}
