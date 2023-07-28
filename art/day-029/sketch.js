const width = 400;
const height = 400;

let x = 0;
function setup() {
	createCanvas(width, height);
	noStroke();

	// frameRate(3);
	background(10);
}

function draw() {
	while (x < width) {
		let y = 0;
		while (y < height) {
			if (random(100) > 96) {
				fill(100, 10, 10);
			} else {
				fill(random(10, 250));
			}
			ellipse(x + 10, y + 10, 20, 20);

			y += 20;
		}
		x += 20;
	}
	console.log(frameRate());
	if (frameRate() >= 70) {
		background(10);
		x = 0;
	}
}
