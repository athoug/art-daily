const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let cam;
let x, y;

function setup() {
	createCanvas(width, height);
	pixelDensity(1);
	background(30);
	cam = createCapture(VIDEO);
	cam.size(width, height);
	cam.hide();
}

function draw() {
	if (cam) {
		cam.loadPixels();

		loadPixels();
		for (let y = 0; y < cam.height; y++) {
			for (let x = 0; x < cam.width; x++) {
				const i = (x + y * width) * 4;

				const r = cam.pixels[i];
				const g = cam.pixels[i + 1];
				const b = cam.pixels[i + 2];
				const a = cam.pixels[i + 3];

				const c = (r + g + b) / 3;

				if (c > 200) {
					pixels[i] = 255;
					pixels[i + 1] = 255;
					pixels[i + 2] = 255;
					pixels[i + 3] = 255;
				}
			}
		}
		updatePixels();
	}
}
