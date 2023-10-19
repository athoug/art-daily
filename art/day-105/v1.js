const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let a;
let t = 0;
const howMany = 30;

function preload() {
	a = loadImage('./assets/a.svg');
}

function setup() {
	createCanvas(width, height);
}

function draw() {
	background(31);
	for (let i = 0; i < howMany; i++) {
		push();
		translate(halfW, halfH);
		rotate(i);
		image(a, (i % 4) * 25 * noise(i, t), (i % 5) * 30 * noise(i, t * 1.7));
		pop();
	}

	t += 0.03;
}
