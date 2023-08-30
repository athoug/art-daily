const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x = 10;
let y = 10;
let a = 0;
let b = 0;

let s = 10;
let moveType = 'circular';

// normal js stuff
controls = document.querySelectorAll('.control-btns');

for (let i = 0; i < controls.length; i++) {
	controls[i].addEventListener('click', (e) => {
		e.preventDefault();
		moveType = e.target.textContent;
		console.log(moveType);
	});
}

function setup() {
	createCanvas(width, height);
	noStroke();
	smooth();
	background(255);
}

function draw() {
	fill('#334195');

	if (moveType === 'forward') {
		x += 1;
		ellipse(x, y, s, s);
	}

	if (moveType === 'down') {
		y += 1;
		ellipse(x, y, s, s);
	}

	if (moveType === 'diagonal') {
		x += 1;
		y += 1;
		ellipse(x, y, s, s);
	}

	if (moveType === 'nothing') {
		x += 1;
		x -= 1;
		ellipse(x, y, s, s);
	}

	if (moveType === 'oscillating') {
		x += 1;
		y += 1;

		let x2 = sin(a) * 25;
		ellipse(x + x2, y, s, s);

		a += 0.1;
	}

	if (moveType === 'circular') {
		x += 1;
		y += 1;

		let x2 = sin(a) * 25;
		let y2 = cos(a) * 35;
		ellipse(x + x2, y + y2, s, s);

		a += 0.1;
	}

	if (moveType === 'random circular') {
		x += 1;
		y += 1;

		let x2 = sin(a) * 25;
		let y2 = cos(a) * 35;

		let x3 = random(-3, 3);
		let y3 = random(-3, 3);
		ellipse(x + x2 + x3, y + y2 + y3, s, s);

		a += 0.1;
	}

	if (moveType === 'double circular') {
		x = halfW;
		y = halfH;

		let x2 = sin(a) * 25;
		let y2 = cos(a) * 35;

		let x3 = sin(b) * 80;
		let y3 = cos(b) * 70;

		ellipse(x + x2 + x3, y + y2 + y3, s, s);

		a += 0.1;
		b += 0.01;
	}

	if (x > width) {
		x = 0;
	}

	if (y > height) {
		y = 0;
	}
}
