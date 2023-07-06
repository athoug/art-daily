const width = 400;
const height = 400;

function setup() {
	createCanvas(width, height);
}

function draw() {
	stroke(random(200, 255), random(100, 155), random(100, 155));

	let x = random(width);

	line(x, 0, x, height);
}
