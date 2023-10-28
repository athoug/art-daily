const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let cam;

function setup() {
	createCanvas(width, height);

	cam = createCapture(VIDEO);
	cam.size(width, height);
	cam.hide();
}

function draw() {
	background(255);

	let maxBri = 0;
	let theBrightestPixel = 1;
	cam.loadPixels();
	for (let i = 0; i < cam.pixels.length; i++) {
		console.log(i);
	}
	image(cam, 0, 0, width, height);
}
