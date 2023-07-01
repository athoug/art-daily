const width = 400;
const height = 400;
const fr = 1;
const lines = 10;
const maxSize = 10;
function setup() {
	createCanvas(width, height);
	frameRate(fr);
}

function draw() {
	background(255, 204, 0);
	for (let i = 0; i < lines; i++) {
		strokeWeight(random(maxSize));
		line(random(width), random(height), random(width), random(height));
	}
}
