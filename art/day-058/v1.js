const width = 400;
const height = 400;

let x = 0;
let y = 0;

let destx = 0;
let desty = 0;

const yellow = '#F49D37';

function setup() {
	createCanvas(width, height);
	noStroke();

	destx = random(width);
	desty = random(height);
}

function draw() {
	background(255);

	fill(yellow);
	ellipse(x, y, 20, 20);

	x = lerp(x, destx, 0.1);
	y = lerp(y, desty, 0.1);

	let d = dist(x, y, destx, desty);

	if (d < 1) {
		destx = random(width);
		desty = random(height);
	}

	if (d < 50) {
		stroke(yellow);
		noFill();
		ellipse(x, y, 100 - d, 100 - d);
		noStroke();
	}
}
