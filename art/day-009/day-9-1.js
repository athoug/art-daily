const width = 400;
const height = 400;

const positions = [
	{ x: 50, y: 50, speed: 1.5, direction: 'left' },
	{ x: width - 50, y: 120, speed: 1.5, direction: 'right' },
	{ x: 30, y: 190, speed: 1.5, direction: 'left' },
	{ x: width - 40, y: 260, speed: 1.48, direction: 'right' },
	{ x: 10, y: 330, speed: 1.5, direction: 'left' },
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

		if (position.direction === 'left') {
			position.x += position.speed;
			if (position.x > width + 50) {
				position.x = 0;
			}
		} else {
			position.x -= position.speed;
			if (position.x < -50) {
				position.x = width - 40;
			}
		}
	});
}
