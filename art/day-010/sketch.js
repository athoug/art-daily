const width = 400;
const height = 400;

let quad1 = false;
let quad2 = false;
let quad3 = false;
let quad4 = false;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke(255);
	strokeWeight(4);
}

function draw() {
	background(51);
	quadCheck();

	if (quad1) {
		fill(255);
	} else {
		noFill();
	}
	ellipse(100, 100, 100, 100);

	if (quad2) {
		fill(255);
	} else {
		noFill();
	}
	ellipse(300, 100, 100, 100);

	if (quad3) {
		fill(255);
	} else {
		noFill();
	}
	ellipse(100, 300, 100, 100);

	if (quad4) {
		fill(255);
	} else {
		noFill();
	}
	ellipse(300, 300, 100, 100);
}

function quadCheck() {
	if (mouseX < 200 && mouseY < 200) {
		quad1 = true;
	} else {
		quad1 = false;
	}

	if (mouseX > 200 && mouseY < 200) {
		quad2 = true;
	} else {
		quad2 = false;
	}

	if (mouseX < 200 && mouseY > 200) {
		quad3 = true;
	} else {
		quad3 = false;
	}

	if (mouseX > 200 && mouseY > 200) {
		quad4 = true;
	} else {
		quad4 = false;
	}
}
