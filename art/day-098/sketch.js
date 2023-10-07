const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

function setup() {
	createCanvas(width, height);
	background(0);
	stroke(255);
	fill(255);
	textSize(80);
}

function draw() {
	if (mouseIsPressed) {
		fill(keyIsPressed ? 255 : 0);
		text(char(int(random(65, 90))), mouseX - 30, mouseY + 40);
	}

	filter(BLUR, 3);
	filter(THRESHOLD);
}
