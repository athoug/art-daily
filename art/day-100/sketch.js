const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let x, y, sz;
function setup() {
	createCanvas(width, height);
	background('#605130');
	noStroke();
	frameRate(1);
	drawMe();
}

function drawMeFacile(x, y, sz) {
	let a, nx, ny;

	const from = color('#B5D333');
	const to = color('#8F683F');

	fill(lerpColor(from, to, random(1)), 0.5);
	ellipse(x, y, sz, sz);

	if (sz > 1) {
		a = random(TWO_PI);
		nx = x + (sz / 2) * sin(a);
		ny = y + (sz / 2) * cos(a);
		drawMeFacile(nx, ny, sz / 2);

		a = random(TWO_PI);
		nx = x + (sz / 2) * sin(a);
		ny = y + (sz / 2) * cos(a);
		drawMeFacile(nx, ny, sz / 2);

		a = random(TWO_PI);
		nx = x + (sz / 2) * sin(a);
		ny = y + (sz / 2) * cos(a);
		drawMeFacile(nx, ny, sz / 2);
	}
}

function draw() {
	drawMe();
}

function drawMe() {
	background('#605130');
	x = halfW;
	y = halfH;
	sz = 200;

	drawMeFacile(x, y, sz);
}
