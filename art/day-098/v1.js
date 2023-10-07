const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

function setup() {
	createCanvas(width, height);
	fill(255);
	stroke(255);
	background(255);

	// for (let i = 0; i < 20; i++) {
	// 	line(0, random(height), width, random(height));
	// }
}

function draw() {
	stroke(random(255), random(255), random(255));
	strokeWeight(random(5));

	line(0, random(height), width, random(height));
	filter(BLUR, 2);
}
