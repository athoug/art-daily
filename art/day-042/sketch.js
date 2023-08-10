const width = 400;
const height = 400;

const photoH = 1448;
const photoW = 1072;
let photo;

let x = 0;
let y = 0;
let a = 0;

function preload() {
	photo = loadImage('./assets/image.png');
}
function setup() {
	createCanvas(width, height);
	background(250);
	stroke('#FABC2A');
	strokeWeight(10);
}

function draw() {
	copy(photo, x * noise(a), y * noise(a), 300, 200, 0, 120, width, 150);
	line(0, 120, width, 120);
	line(0, 270, width, 270);

	x += 10;
	y += 10;
	a += 0.03;

	// reseter code
	if (x > photoW) {
		x = 0;
	}

	if (y > photoH) {
		y = 0;
	}
}
