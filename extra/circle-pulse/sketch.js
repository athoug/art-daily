const width = 400;
const height = 400;

let size = 200;
let lineWeight = 4;

function setup() {
	createCanvas(width, height);
	background(159, 132, 189);
}

function draw() {
	stroke(192, 155, 216, 100);
	fill(235, 195, 219, 100);

	size = random(300);
	lineWeight = random(50);

	strokeWeight(lineWeight);
	circle(width / 2, height / 2, size);
}
