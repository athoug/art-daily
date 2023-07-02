const width = 400;
const height = 400;
function setup() {
	createCanvas(width, height);
	frameRate(1);
}

function draw() {
	background(random(256), random(256), random(256));
}
