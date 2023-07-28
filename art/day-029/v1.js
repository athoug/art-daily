const width = 400;
const height = 400;

let x = 0;
function setup() {
	createCanvas(width, height);
	background(255);
	noStroke();

	while (x < width) {
		let y = 0;
		while (y < height) {
			fill(random(10, 250));
			rect(x, y, 38, 38);
			y += 40;
		}

		x += 40;
	}
}

function draw() {}
