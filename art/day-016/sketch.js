const width = 600;
const height = 600;

let saveNumber = 1;
let pointWidth = 2;
let bgColorR = 51;
let bgColorG = 51;
let bgColorB = 51;

function setup() {
	createCanvas(width, height);
	background(bgColorR, bgColorG, bgColorB);
	stroke(255);
	drawLine();
}

function draw() {
	if (mouseIsPressed) {
		strokeWeight(pointWidth);
		point(mouseX, mouseY);
	}
}

function keyPressed() {
	console.log(key);

	// reset the canvas
	if (key == 'r' || key == 'R') {
		background(bgColorR, bgColorG, bgColorB);
		drawLine();
	}

	// resent & change background color
	if (key == 'b' || key == 'B') {
		bgColorR = random(255);
		bgColorG = random(255);
		bgColorB = random(255);
		background(bgColorR, bgColorG, bgColorB);
		drawLine();
	}

	// change point color
	if (key == 'c' || key == 'C') {
		stroke(random(255), random(255), random(255));
		drawLine();
	}

	// change stroke size by making it bigger
	if (key == '+') {
		pointWidth += 1;
	}
	// change stroke size by making it smaller
	if (key == '-' && pointWidth != 1) {
		pointWidth -= 1;
	} else if (key == '-' && pointWidth == 1) {
		console.log('this is the smallest size');
	}

	// save the file
	if (key == 's' || key == 'S') {
		const file = 'image-' + saveNumber;
		saveCanvas(file, 'png');
		console.log('your file ' + file + ' has been saved');
	}
}

function drawLine() {
	strokeWeight(6);
	line(0, 0, width, 0);
}
