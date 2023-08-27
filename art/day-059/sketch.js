const width = 400;
const height = 400;

let seed;
function setup() {
	createCanvas(width, height);
	colorMode(HSB, 100);
	noStroke();
	frameRate(2);

	seed = random(10000000);
	randomSeed(seed);

	console.log(seed);
}

function draw() {
	let x = 0;

	while (x < width) {
		let wi = random(100);

		fill(random(100), 80, 80);
		rect(x, 0, wi, height);

		x += wi;
	}
}
