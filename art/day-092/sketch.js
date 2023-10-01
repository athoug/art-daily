const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let data;
function preload() {
	data = loadBytes('./assets/image.png');
}

function setup() {
	createCanvas(width, height);
	colorMode(HSB);

	for (let i = 0; i < width; i++) {
		const myHue = data.bytes[i].toString(8);
		stroke(myHue, 50, 255);
		line(i, 0, i, height);
	}
}

function draw() {}
