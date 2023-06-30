const width = 400;
const height = 400;
let fr = 1; //starting FPS
let bg = 220;
let color = 0;
function setup() {
	// first step is creating a canvas for our drawings
	frameRate(fr);
	createCanvas(width, height);
	// set the background color
	background(bg);
}

function draw() {
	// I want to make a list of 10 points
	const pointsCount = 20;
	const maxSize = 25;
	// loop over them to create those points and also I want random sizes
	for (let i = 0; i < pointsCount; i++) {
		x = Math.floor(Math.random() * width);
		y = Math.floor(Math.random() * height);
		pointSize = Math.floor(Math.random() * maxSize);
		stroke(color);
		strokeWeight(pointSize); // set the points size
		point(x, y);
	}
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function mousePressed() {
	bg = getRandomColor();
	color = getRandomColor();
	background(bg);
}
