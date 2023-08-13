const width = 400;
const height = 400;

let photo;
let a = 0;

function preload() {
	photo = loadImage('./assets/photo.jpg');
}
function setup() {
	createCanvas(width, height);

	stroke('#FEFB03');
	strokeWeight(8);
}

function draw() {
	const w = map(noise(a * 1.2 + 40), 0, 1, 150, 1000);
	const h = map(noise(a * 1.7 + 30), 0, 1, 150, 1000);
	const x = map(noise(a * 1.3 + 10), 0, 1, 0, photo.width - w);
	const y = map(noise(a * 1.3 + 20), 0, 1, 0, photo.height - h);

	copy(photo, x, y, w, h, 0, 100, width, 200);
	line(0, 100, width, 100);
	line(0, 300, width, 300);

	a += 0.01;
}
