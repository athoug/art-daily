const width = 400;
const height = 400;

let circle_x = 100;
let circle_y = 100;
let move_x = 2;
let move_y = 2;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke('#a6cfd5');
	strokeWeight(4);
}

function draw() {
	background('#0D0221');
	ellipse(circle_x, circle_y, 40, 40);

	circle_y += move_x;
	circle_x += move_y;

	if (circle_x < 0) {
		move_x = 2;
	} else if (circle_x > width) {
		move_x = -2;
	}

	if (circle_y < 0) {
		move_y = 2;
	} else if (circle_y > height) {
		move_y = -2;
	}
}
