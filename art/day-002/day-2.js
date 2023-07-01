const width = 400;
const height = 400;
const fr = 1;
function setup() {
	createCanvas(width, height);
	frameRate(fr);
}

function draw() {
	background(255, 204, 0);
	line(random(width), random(height), random(width), random(height));
}
