const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const howMany = 160;
let a = 0.01;

function setup() {
	createCanvas(width, height);
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(30);

	const from = color(166, 61, 64);
	const to = color(226, 182, 182);
	const yellow = color(233, 184, 114);

	for (let i = 0; i < howMany; i++) {
		push();
		translate(halfW, halfH);
		rotate(i + frameCount * 0.01);
		const interA = lerpColor(from, to, i / 150);
		const interB = lerpColor(from, to, i * 0.33);
		drawRect(
			(i % 5) * 15,
			i,
			120,
			noise(a) * 30,
			interA,
			yellow,
			mouseIsPressed
		);
		pop();
	}

	a += 0.03;
}

function drawRect(x, y, w, h, c1, c2, effectOn) {
	if (effectOn) {
		c2.setAlpha(10);
		for (let i = 0; i < 5; i++) {
			strokeWeight((2 + i) * (2 + i));
			stroke(c2);
			rect(x, y, w, h);
		}
	}

	noStroke();
	fill(c1);
	rect(x, y, w, h);
}
