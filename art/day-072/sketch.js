const width = 450;
const height = 450;
const halfW = width / 2;
const halfH = height / 2;

const pixels = [];

function setup() {
	createCanvas(width, height);
	pg = createGraphics(width, height);

	for (let x = 0; x < width + 200; x++) {
		for (let y = 0; y < 150; y++) {
			pixels.push({
				x,
				y,
				r: random(255),
				g: random(255),
				b: random(255),
			});
		}
	}

	for (let x = 0; x < width + 200; x++) {
		for (let y = 150; y < 200; y++) {
			pixels.push({
				x,
				y,
				r: random(217, 255),
				g: random(148, 200),
				b: random(100),
			});
		}
	}

	for (let x = 0; x < width + 200; x++) {
		for (let y = 200; y < height + 200; y++) {
			pixels.push({
				x,
				y,
				r: random(255),
				g: random(255),
				b: random(255),
			});
		}
	}

	pg.clear();
	frameRate(100);
}

function draw() {
	background(255);

	pg.noStroke();
	pg.rect(0, 0, width, height);

	image(pg, 0, 0);

	t = frameCount / 100;

	for (let i = 0; i < pixels.length; i++) {
		stroke(pixels[i].r, pixels[i].g, pixels[i].b);
		point(pixels[i].x * noise(t, i, 1.2), pixels[i].y * noise(t, i, 1.7));
	}
	let c = get(mouseX, mouseY);
	pg.fill(c);
}
