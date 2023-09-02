const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const colors = ['#1A535C', '#4ECDC4', '#FF6B6B', '#FFE66D'];
const circles = [];
const margin = 40;
const circleCount = 8;
const s = 20;
let n = 0;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();

	for (let x = 0; x < circleCount; x++) {
		for (let y = 0; y < circleCount; y++) {
			circles.push({
				x: margin + x * margin + s,
				y: margin + y * margin + s,
				s,
				grow: 0,
				f: int(random(20, 60)),
				baseSize: 10,
				maxSize: 35,
				c: colors[int(random(colors.length))],
			});
		}
	}
}

function draw() {
	background(255);

	for (let i = 0; i < circles.length; i++) {
		if (n % circles[i].f == 0) {
			circles[i].grow = 0.5;
		}

		if (circles[i].s > circles[i].maxSize) {
			circles[i].s = circles[i].maxSize;
			circles[i].grow = -0.5;
		}

		if (circles[i].s < circles[i].baseSize) {
			circles[i].s = circles[i].baseSize;
			circles[i].grow = 0;
		}

		fill(circles[i].c);
		ellipse(circles[i].x, circles[i].y, circles[i].s, circles[i].s);

		circles[i].s += circles[i].grow;
	}

	n += 1;

	console.log(circles);
}
