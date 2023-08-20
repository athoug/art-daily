const width = 400;
const height = 400;

const stars = [];
let a = 0;
const starCount = 100;

function setup() {
	createCanvas(width, height);
	background(31);
	smooth();
	noCursor();

	let i = 0;
	while (i < starCount) {
		stars.push({
			x: random(0, width),
			y: random(0, height),
			speed: random(1, 6),
		});
		i += 1;
	}
}

function draw() {
	background(31);

	// triangle
	// triangle(mouseX, mouseY - 6, mouseX, mouseY + 6, mouseX + 30, mouseY);

	let i = 0;
	while (i < stars.length) {
		const co = map(stars[i].speed, 1, 5, 100, 255);
		stroke(co);
		strokeWeight(stars[i].speed);
		point(stars[i].x, stars[i].y);

		stars[i].x -= stars[i].speed / 2;

		if (stars[i].x < 0) {
			stars[i].x = width;
		}

		i += 1;
	}

	noStroke();
	fill('#f7ce5b');
	triangle(
		a,
		width * noise(a / 50) - 6 - 50,
		a,
		width * noise(a / 50) + 6 - 50,
		a + 30,
		width * noise(a / 50) - 50
	);

	if (a > width + 50) {
		a = 0;
	}
	a += 0.5;
}
