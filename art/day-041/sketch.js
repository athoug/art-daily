const width = 600;
const height = 600;

let photo;
let x = 0;
let y = 0;
let a = 0;
function preload() {
	photo = loadImage('./assets/eye.gif');
}

function setup() {
	createCanvas(width, height);
}

function draw() {
	background(0);
	image(photo, x * noise(a * 1.7), y * noise(a * 0.7));

	if (x < 100) {
		x += 1;
	}

	if (y < 100) {
		y += 1;
	}

	a += 0.03;
}
