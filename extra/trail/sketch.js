const width = 400;
const height = 400;

let extraCanvas;

let x = 200;
let y = 200;

// the problem
// I want to animate the square without a trail but also want to draw circles
function setup() {
	createCanvas(width, height);
	extraCanvas = createGraphics(400, 400);

	extraCanvas.clear(); // this makes the extra canvas transparent
	background(51);
}

function draw() {
	// no trails
	background(51);
	x += random(-5, 5);
	y += random(-5, 5);

	fill(255, 200);
	stroke(255);
	rectMode(CENTER);
	rect(x, y, 20, 20);

	// trails
	if (mouseIsPressed) {
		extraCanvas.fill(255, 150);
		extraCanvas.noStroke();
		extraCanvas.ellipse(mouseX, mouseY, 40, 40);
	}

	// to see the extra canvas
	image(extraCanvas, 0, 0);
}
