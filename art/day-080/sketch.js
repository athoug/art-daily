const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let a = 0;
let x = 0;
let oldx;
let oldy;
let b;
let w;
let inScene3 = true;

function setup() {
	createCanvas(width, height);
	background('#340068');
	smooth();
	resetData();
}

function scene1() {
	stroke('#FF6978');
	strokeWeight(2);
	let x = 0;
	while (x < width) {
		point(x, height * noise(x / 100, a));

		x += 1;
	}

	a += 0.02;
}

function scene2() {
	stroke('#FFFCF9');
	noFill();
	strokeWeight(2);
	for (let i = 0; i < 10; i++) {
		drawBezier(i * 80);
	}

	x += 0.01;
}

function scene3() {
	stroke('#B1EDE8');
	strokeWeight(w);
	let newx = oldx + cos(b) * 5;
	let newy = oldy + sin(b) * 5;

	line(oldx, oldy, newx, newy);

	oldx = newx;
	oldy = newy;

	b += random(-0.4, 0.4);
	w += 0.05;

	if (oldx < 0 || oldx > width || oldy < 0 || oldy > height) {
		resetData();
	}
}

function draw() {
	const m = millis();

	if (m < 2000) {
		background('#340068');
		scene2();
	} else if (m < 12000) {
		background('#340068');
		scene1();
	} else if (m < 25000) {
		if (inScene3) {
			background('#340068');
		}
		scene3();
		inScene3 = false;
	} else {
		console.log('end?');
		background('#340068');
		noLoop();
	}
}

function drawBezier(a) {
	bezier(
		width * noise(x, a),
		height * noise(x, a + 10),
		width * noise(x, a + 20),
		height * noise(x, a + 30),
		width * noise(x, a + 40),
		height * noise(x, a + 50),
		width * noise(x, a + 60),
		height * noise(x, a + 70)
	);
}

function resetData() {
	oldx = halfW;
	oldy = halfH;
	b = random(TWO_PI);
	w = 1;
}
