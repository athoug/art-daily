const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let img;
let pixelCount = 100;

function preload() {
	img = loadImage('./assets/m51.jpg');
}
function setup() {
	createCanvas(width, height, WEBGL);

	img.loadPixels();
	noStroke();
}

function draw() {
	background(31);

	// translate(-width / 2, -height / 2, 0);
	lights();
	scale(4);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);

	for (let x = 0; x < pixelCount; x++) {
		for (let y = 0; y < pixelCount; y++) {
			// map the sizes
			const imgX = map(x, 0, 100, 0, img.width);
			const imgY = map(y, 0, 100, 0, img.height);

			// get pixel at set coordinate
			const bright = brightness(img.get(imgX, imgY));

			if (bright > 40) {
				push();
				translate(x, y);
				box(bright / 226);
				pop();
			}
		}
	}
}

function keyPressed() {
	if (key === 's') {
		saveCanvas('my-galaxy', 'png');
	}
}
