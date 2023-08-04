const width = 400;
const height = 400;

let noiseX = 0;
let noiseY = 0;

function setup() {
	createCanvas(width, height);
	background('#E3B23C');
	noStroke();
	smooth();
}

function draw() {
	background('#E3B23C');

	let x = map(sin(noiseX), -1, 1, 0, width);
	let y = map(sin(noiseY), -1, 1, 0, height);
	ellipse(x, y, 30, 30);

	noiseX += 0.02;
	noiseY += 0.05;
}
