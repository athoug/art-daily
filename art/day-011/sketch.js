const width = 500;
const height = 500;
const circles = [];
const margin = 25;

function setup() {
	createCanvas(width, height);
	background(51);
	noFill();
	stroke(255);
	strokeWeight(2);

	for (let j = 1; j < 6; j++) {
		for (let i = 1; i < 7; i++) {
			data = {
				x: i * 70 + margin / 3,
				y: j * 70 + margin,
				size: 50,
				color: 255,
			};
			circles.push(data);
		}
	}
}

function draw() {
	background(51);
	for (let i = 0; i < circles.length; i++) {
		size = circles[i].size;
		if (random(10) > 5) {
			size = circles[i].size - 10;
		}
		ellipse(circles[i].x, circles[i].y, size, size);
	}
}
