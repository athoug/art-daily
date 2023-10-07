const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const dotsToDraw = 100;

let vid;

function setup() {
	createCanvas(width, height);
	frameRate(30);
	colorMode(HSB, 255);
	background(255); // this means white because remember teh HSB is set to max value 1
	noStroke();

	vid = createVideo('../day-096/assets/movie.mov', loadVideo);
	vid.size(450, 750);
}

function draw() {
	// Before accessing the pixels array always use loadPixels!
	vid.loadPixels();

	// For each frame we draw a collection of dots
	// beginning at the center of the screen.
	let x = halfW;
	let y = halfH;

	// We draw up to 100 dots (less if we touch the border of
	// the screen while moving in this loop).
	for (let i = 0; i < dotsToDraw; i++) {
		// Read the color of a pixels.
		// This is equivalent to mov.get(x*2, y*2);

		console.log('x', x);
		console.log('y', y);

		// get pixel on a screen formula
		// x + y * width * 4
		const c = get(x, y);
		console.log(c);
		// Extract hue, saturation and brightness information from that color.
		const h = c[0];
		const s = c[1];
		const b = c[2];

		// Draw an ellipse using that hue, saturation and brightness.
		fill(h, s, b);
		const sz = map(s, 0, 255, 0, 1);
		// console.log(h, s, b);
		// The saturation sets the size of the ellipse.
		// We multiply the s variable because otherwise the maximum size
		// would be just 1 pixel.
		ellipse(x, y, sz * 20, sz * 20);

		// Now we take a step away from our position.
		// The size of this step depends on the brightness of the pixel.
		// We multiply b to allow for bigger steps, otherwise steps would be tiny.
		// In which direction we go (North, South, East, West, or something in
		// between) depends on the hue. We multiply also h to make it more
		// responsive to hue changes.
		const hx = map(h, 0, 255, 0, 1);
		const bx = map(b, 0, 255, 0, 1);

		console.log('h');
		x += sin(hx * 15) * bx * 40;
		y += cos(hx * 15) * bx * 40;

		// console.log(x, y);
		// Finally, check if we touched a border while moving. If we did,
		// get out of the loop. There's no point in drawing out of the screen.
		if (x < 0 || y < 0 || x >= width || y >= height) {
			break;
		}
	}
}

function loadVideo() {
	vid.play();
	vid.volume(0);
	vid.speed(1);
	// vid.hide();
}
