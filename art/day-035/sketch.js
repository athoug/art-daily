const width = 400;
const height = 400;

const halfH = height / 2;
const halfW = width / 4;

function setup() {
	createCanvas(width, height);
}

let i = 0;

function draw() {
	let a = 0.0;
	let inc = TWO_PI / 25;

	// for (let i = 0; i < width; i++) {
	// 	line(i * 4, halfH, i * 4, halfH + sin(a) * 40);
	// 	a += inc;
	// }

	strokeWeight(5 * noise(i / 10));
	line(i * 4, halfH, i * 4, halfH + sin(i) * random(100));
	a += inc;
	i += 1;

	if (i > halfW) {
		background(255);
		i = 0;
	}
}
