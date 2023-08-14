const width = 400;
const height = 400;

let saves = 0;
let paper;
let a = 0;

function setup() {
	paper = createCanvas(width, height);
	colorMode(HSB);
	frameRate(10);
}

function draw() {
	background(255);
	let x = 0;
	const rnd = random(100);
	console.log(rnd);
	while (x < width) {
		let y = 0;
		while (y < height) {
			const n = noiseGenerator(rnd, x, y);
			const h =
				n.type === 'noise' ? map(n.v, 0, 1, 0, 360) : map(n.v, -1, 1, 0, 360);
			stroke(h, 150, 150);
			point(x, y);
			y += 1;
		}
		x += 1;
	}
}

function noiseGenerator(rnd, x, y) {
	let v;
	let type;
	if (rnd > 75) {
		console.log(75);
		v = noise(x / 10, y / 11);
		type = 'noise';
	} else if (rnd > 65) {
		console.log(75);
		v = noise(x / 10, y / 11) * width * noise(a);
		type = 'noise';
	} else if (rnd > 45) {
		console.log(55);
		v = sin(x / 110, y / 11) * width * noise(a * 1.7);
		type = 'sin';
	} else if (rnd > 25) {
		console.log(35);
		v = sin(x / 110, y / 11) + sin(a / y);
		type = 'sin';
	} else {
		console.log('else');
		v = sin(x / 110, y / 11) * sin(a / y) * sin(x / 42, y / 21);
		type = 'sin';
	}

	a += 0.03;

	return {
		v,
		type,
	};
}

function keyPressed() {
	if (key.toLowerCase() == 's') {
		saves += 1;
		saveCanvas(paper, `pattern-${saves}`, 'png');
	}
}
