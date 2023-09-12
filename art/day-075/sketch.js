const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const circles = [];
let d = 20;

function setup() {
	createCanvas(width, height);
	smooth();
	noFill();
	stroke('#B5FED9');
	strokeWeight(2);
}

function draw() {
	background(255);

	ellipse(mouseX, mouseY, d, d);

	if (mouseIsPressed) {
		d++;
	}
	for (let i = 0; i < circles.length; i++) {
		console.log('i am in?');
		ellipse(
			circles[i].x + noise(circles[i].a, circles[i].n, i) * 25,
			circles[i].y + noise(circles[i].a, circles[i].n, i) * 25,
			circles[i].s,
			circles[i].s
		);

		circles[i].n += circles[i].a;

		circles[i].s += circles[i].grow;

		if (circles[i].s > circles[i].maxS) {
			circles[i].s = circles[i].maxS;
			circles[i].grow = -0.5;
		}

		if (circles[i].s < circles[i].baseS) {
			circles[i].s = circles[i].baseS;
			circles[i].grow = 0.5;
		}
	}
}

function mouseReleased() {
	circles.push({
		x: mouseX,
		y: mouseY,
		s: d,
		baseS: d,
		maxS: d * 2,
		grow: 0.5,
		n: random(0, 1),
		a: random(0.01, 0.05),
	});

	d = 20;
}
