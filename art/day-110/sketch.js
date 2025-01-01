const lines = [];
const yGrid = 7;
const xGrid = 18;
const gap = 20;
const m = 30;
let rSpeed = 0.1;

function lineObject(x, y) {
	return {
		x1: x,
		y1: y,
		x2: x,
		y2: y + m,
		speed: rSpeed,
	};
}

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	background(44);

	// populate the lines
	for (let y = 0; y < yGrid; y++) {
		for (let x = 0; x < xGrid; x++) {
			newline = lineObject(x * gap + m, y * gap * 2.6 + m);
			lines.push(newline);
			rSpeed += 0.1;
		}
	}

	console.log(lines);
}

function draw() {
	background(44);
	lines.forEach((item) => {
		stroke(255, 210, 210);
		strokeWeight(2);
		push();
		// const diff = item.y2 - item.y1;
		const halfY = (item.y2 - item.y1) / 2;
		translate(item.x1, item.y1 + halfY);

		rotate(frameCount + item.speed * mouseX);
		line(0, -halfY, 0, halfY);
		pop();
	});
}
