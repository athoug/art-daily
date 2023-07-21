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

	fill(255, 107, 108);
	stroke(51);
	// trails

	let starX = random(width);
	let starY = random(height);
	extraCanvas.ellipse(starX, starY, 10, 10);

	// to see the extra canvas
	image(extraCanvas, 0, 0);

	rectMode(CENTER);
	rect(x, y, 20, 20);
}
