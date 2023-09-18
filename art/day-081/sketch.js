const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let bgColor;
let x = halfW;
let y = halfH;
let s = 100;

function setup() {
	createCanvas(width, height);
	smooth();
	colorMode(HSB);
	fill(random(255), 100, 200);
	bgColor = color(random(255), 150, 255);
}

function draw() {
	background(bgColor);

	if (dist(x, y, mouseX, mouseY) < s / 2) {
		stroke(255);
		cursor(HAND);
		if (mouseIsPressed) {
			strokeWeight(5);
			// this is for natural smooth movment
			x -= pmouseX - mouseX;
			y -= pmouseY - mouseY;
		} else {
			strokeWeight(2);
		}
	} else {
		noStroke();
		cursor(ARROW);
	}

	ellipse(x, y, s, s);
}
