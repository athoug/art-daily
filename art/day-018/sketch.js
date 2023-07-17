const width = 400;
const height = 400;
const halfX = width / 2;
const halfY = height / 2;

let circles = [];

let h = 0;
let s = 0;
let l = 0;

function setup() {
	createCanvas(width, height);
	colorMode(HSB);

	h = random(255);
	s = random(255);
	l = random(255);
	background(h, s, l);
	noFill();
	stroke(255, 100);

	const x = 10;
	const y = random(height);
	let i = 0;

	while (i < 50) {
		data = {
			x: x + i * 8,
			y: height / 2,
			sizeX: 100,
			sizeY: 100,
		};

		circles.push(data);

		i += 1;
	}
}

function draw() {
	background(h, s, l);
	let i = 0;
	while (i < circles.length) {
		ellipse(circles[i].x, circles[i].y, circles[i].sizeX, circles[i].sizeY);
		i += 1;
	}

	if (mouseX <= halfX && mouseX >= 0) {
		circles.forEach(function (item) {
			item.sizeX -= 1;
		});
	}

	if (mouseX >= halfX && mouseX <= width) {
		circles.forEach(function (item) {
			item.sizeX += 1;
		});
	}

	if (mouseY <= halfY && mouseY >= 0) {
		circles.forEach(function (item) {
			item.sizeY -= 1;
		});
	}

	if (mouseY >= halfY && mouseY <= height) {
		circles.forEach(function (item) {
			item.sizeY += 1;
		});
	}
}
