const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x = 10;
let y = 10;
let a = 0;
let b = 0;

let s = 20;

let x2r = 65;
let y2r = 75;

let x3r = 120;
let y3r = 110;

let rounds = 0;
let c = '#020887';

function setup() {
	createCanvas(width, height);
	noStroke();
	smooth();
	background(255);
}

function draw() {
	fill(c);

	x = halfW;
	y = halfH;

	let x2 = sin(a) * x2r;
	let y2 = cos(a) * y2r;

	let x3 = sin(b) * x3r;
	let y3 = cos(b) * y3r;

	ellipse(x + x2 + x3, y + y2 + y3, s, s);

	a += 0.1;
	b += 0.01;

	if (b > TWO_PI) {
		console.log('full circle');
		rounds += 1;
		b = 0;

		if (rounds === 1) {
			c = '#334195';
			s = 15;

			x2r = 45;
			y2r = 55;

			x3r = 100;
			y3r = 90;
		}

		if (rounds === 2) {
			c = '#647AA3';
			s = 10;

			x2r = 25;
			y2r = 35;

			x3r = 80;
			y3r = 70;
		}
	}
}
