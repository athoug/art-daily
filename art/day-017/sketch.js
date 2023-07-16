const width = 400;
const height = 400;
let size = 8;

function setup() {
	createCanvas(width, height);
	background('#273173');
	noStroke();
}

function draw() {
	fill('rgba(39, 49, 115, 0.1)');
	rect(0, 0, width, height);

	size = random(10);
	fill('#FED315');
	circle(random(width), random(height), size);
}
