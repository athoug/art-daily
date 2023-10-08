const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const dotsToDraw = 100;

let vid;

function setup() {
	createCanvas(width, height);
	frameRate(30);
	colorMode(HSB, 1);
	background(255);
	noStroke();

	vid = createVideo('../day-096/assets/movie.mov', loadVideo);
	vid.size(450, 750);
}

function draw() {
	// For each frame we draw a collection of dots
	// beginning at the center of the screen.
	let x = halfW;
	let y = halfH;

	// Before accessing the pixels array always use loadPixels!
	vid.loadPixels();

	// We draw up to 100 dots (less if we touch the border of
	// the screen while moving in this loop).
	for (let i = 0; i < dotsToDraw; i++) {
		let index = int((x + width * y) * 4);

		const h = map(vid.pixels[index], 0, 255, 0, 1);
		const s = map(vid.pixels[index + 1], 0, 255, 0, 1);
		const b = map(vid.pixels[index + 2], 0, 255, 0, 1);

		// console.log('HSB', h, s, b);
		// console.log('sin', sin(h) * b * 40);

		fill(h, s, b);
		ellipse(x, y, s * 30, s * 30);

		x += sin(h * TWO_PI) * b * 40;
		y += cos(h * TWO_PI) * b * 40;

		if (x > width || y > height || x < 0 || y < 0) {
			break;
		}
	}

	filter(BLUR, 2);
	filter(THRESHOLD);
	filter(DILATE);
}

function loadVideo() {
	vid.play();
	vid.volume(1);
	vid.speed(1);
	vid.hide();
}
