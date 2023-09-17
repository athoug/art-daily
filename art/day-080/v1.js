const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let elipX;
let elipY;
let rectX;
let rectY;
let x;

let ellipsSize = 100;
let rectSize = 100;

function setup() {
	createCanvas(width, height);
	background('#2E294E');
	noStroke();
	fill('#C5D86D');
	frameRate(10);
}

function scene1() {
	elipX = random(width);
	elipY = random(height);

	ellipse(elipX, elipY, ellipsSize, ellipsSize);
}

function scene2() {
	rectX = random(width);
	rectY = random(height);
	rect(rectX, rectY, rectSize, rectSize);
}

function scene3() {
	x = random(width);
	stroke('#C5D86D');
	noFill();
	rect(x, 0, x, height);
}

function draw() {
	background('#2E294E');
	const m = millis();

	if (m < 2000) {
		scene1();
	} else if (m < 12000) {
		scene2();
	} else if (m < 17000) {
		scene3();
	} else {
		noLoop();
	}
}
