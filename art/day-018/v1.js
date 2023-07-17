const width = 400;
const height = 400;
colorMode(HSB);

function setup() {
	createCanvas(width, height);
	background(random(255), random(255), random(255));
	noFill();
	stroke(255, 100);

	const x = random(width);
	const y = random(height);
	let i = 0;
	while (i < 100) {
		ellipse(x + i * 1.5, y + i * 1.5, 100 + i, 100 - i);
		i += 1;
	}
}
