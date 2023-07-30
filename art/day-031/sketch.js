const width = 400;
const height = 400;

let noiseScale = 0.02;

function setup() {
	createCanvas(width, height);
}

function draw() {
	background(250);
	for (let x = 0; x < width; x++) {
		const noiseVal = noise(mouseX + x * noiseScale, mouseY * noiseScale);
		stroke(noiseVal * 100);
		line(x, mouseY + noiseVal * 80, x, height);
	}
}
