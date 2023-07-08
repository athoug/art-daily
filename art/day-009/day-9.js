const width = 400;
const height = 400;

const positions = [
	{ x: 50, y: 50, speed: 1.5 },
	{ x: 40, y: 120, speed: 1.4 },
	{ x: 30, y: 190, speed: 1.3 },
	{ x: 20, y: 260, speed: 1.2 },
	{ x: 10, y: 330, speed: 1 },
];
function setup() {
	createCanvas(width, height);
	noFill();
	stroke('#FF8000');
	strokeWeight(3);
}

function draw() {
	background('#051346');

	positions.forEach((position) => {
		ellipse(position.x, position.y, 50, 50);
		position.x += position.speed;

		if (position.x > width + 50) {
			position.x = 0;
		}
	});
}
