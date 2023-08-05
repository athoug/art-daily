// --------------------
// following the example in P5.js titled "Math sin wave"
// https://p5js.org/examples/math-sine-wave.html
// --------------------

const width = 400;
const height = 400;

let xspacing = 8; // distance between each horizontal location
let w; // width of the entire wave
let theta = 0.0; // start angle at0
let amplitude = 75.0; // height of wave
let period = 300.0; // how many pixels before the wave repeats
let dx; //value for incrementing x
let yValues; // using an array to store height values for the wave

function setup() {
	createCanvas(width, height);
	w = width + xspacing;
	dx = (TWO_PI / period) * xspacing;
	yValues = new Array(floor(w / xspacing));
	colorMode(HSB);
}

function draw() {
	background(20);
	calculateWave();
	renderWave();
}

function calculateWave() {
	// increment theta (try different values for 'angular velocity' here)
	theta += 0.02;

	// for every x value, calculate a y value with sine function
	let x = theta;
	for (let i = 0; i < yValues.length; i++) {
		yValues[i] = sin(x) * amplitude * sin(x * 1.2) * sin(x * 1.2);

		x += dx;
	}
}

function renderWave() {
	noStroke();
	// a simple way to draw the wave with an ellipse at each location
	for (let x = 0; x < yValues.length; x++) {
		fill(60 * noise(x / 10), 255, 255);
		ellipse(x * xspacing, height / 2 + yValues[x], 5, 5);
	}
}
