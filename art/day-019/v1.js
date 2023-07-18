const height = 400;
const width = 400;

colorMode(HSB);

function setup() {
	createCanvas(width, height);
	background(random(255), random(255), random(255));
	noFill();
	stroke(255, 100);

	const x = random(width);
	const y = random(height);
	let i = 0;

	while (i < 80) {
		ellipse(width / 2, height / 2, 100 + i * 3, 100 - i * 3);
		i += 3;
	}
}
