// testing getting pixels from an image

function setup() {
	createCanvas(320, 240);
	pixelDensity(1);
}

function draw() {
	background(51);

	// alerting p5 that we want to work with pixels
	loadPixels();

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const index = (x + y * width) * 4;

			pixels[index] = x;
			// pixels[index + 1] = 0;
			pixels[index + 1] = random(255);
			pixels[index + 2] = y;
			pixels[index + 3] = 255;
		}
	}

	// when changing the pixels I need to say that I'm done changing
	updatePixels();
}
