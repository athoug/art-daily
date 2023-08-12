const width = 400;
const height = 400;

let photo;
let a = 0;

function preload() {
	photo = loadImage('./assets/image.gif');
}

function setup() {
	createCanvas(width, height);
}

function draw() {
	let x = map(noise(a * 1.2), 0, 1, 100, 400);
	let y = map(noise(a), 0, 1, 100, 300);
	let w = map(noise(a * 1.7), 0, 1, 100, 400);
	let h = map(noise(a * 1.4), 0, 1, 100, 400);

	copy(photo, x, y, w, h, 0, y, width, y);

	a += 0.01;
}
