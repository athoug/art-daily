const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let cam;
function setup() {
	createCanvas(width, height);
	pixelDensity(1);

	cam = createCapture(VIDEO);
	cam.size(width, height);
	cam.hide();
}

function draw() {
	let maxBri = 0;
	let theBrightPixelX = 0;
	let theBrightPixelY = 0;

	if (cam) {
		cam.loadPixels();

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < height; x++) {
				// get the pixel location from the pixel array
				const i = (x + y * width) * 4;

				// access the red, gree, blue, and alpha of the pixel
				const r = cam.pixels[i];
				const g = cam.pixels[i + 1];
				const b = cam.pixels[i + 2];
				const a = cam.pixels[i + 3];

				// convert it into a color
				const c = color(r, g, b, a);

				// check the brightness
				if (brightness(c) > maxBri) {
					maxBri = brightness(c);
					theBrightPixelX = x;
					theBrightPixelY = y;
				}
			}
		}
	}
	image(cam, 0, 0);

	fill(255, 0, 0);
	ellipse(theBrightPixelX, theBrightPixelY, 20, 20);
}
