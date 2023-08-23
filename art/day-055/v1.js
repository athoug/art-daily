const width = 400;
const height = 400;

const x = [];
const y = [];
const char = [];

function setup() {
	createCanvas(width, height);
}

function draw() {
	background(255);

	let i = 0;
	while (i < x.length) {
		textSize(random(20, 30));
		if (random(20) > 17) {
			textStyle(BOLD);
		} else {
			textStyle(NORMAL);
		}

		text(char[i], x[i], y[i]);
		x[i] += random(-2, 2);
		y[i] += random(-2, 2);

		i += 1;
	}
}

function keyPressed() {
	x.push(mouseX);
	y.push(mouseY);
	char.push(key);

	console.log('clicked');
	console.log(key);
}
