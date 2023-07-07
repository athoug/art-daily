const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
	background(51);

	const size_x = width / 2;
	const size_y = height / 2;
	const center_x = width / 2;
	const center_y = height / 2;

	noFill();
	stroke(255);
	ellipse(center_x - 50, center_y, size_x, size_y);
	ellipse(center_x, center_y - 50, size_x, size_y);
	ellipse(center_x + 50, center_x, size_x, size_y);
	ellipse(center_x, center_y + 50, size_x, size_y);

	ellipse(center_x - 35, center_y - 35, size_x, size_y);
	ellipse(center_x - 35, center_y + 35, size_x, size_y);
	ellipse(center_x + 35, center_y - 35, size_x, size_y);
	ellipse(center_x + 35, center_y + 35, size_x, size_y);
}

function draw() {}
