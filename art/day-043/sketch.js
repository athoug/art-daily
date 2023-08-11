// sketch following p5.js examples
// wave maker - https://p5js.org/examples/interaction-wavemaker.html
// this was inspired by bees and bombs - https://beesandbombs.tumblr.com/post/45513650541/orbiters

const width = 600;
const height = 600;

let t = 0; // time variable

function setup() {
	createCanvas(width, height);
	// noStroke();
	// fill(40, 200, 40);
}

function draw() {
	// background(10, 10); // translucent background (creates trails)
	background(255);

	// making a x and y grid of ellipses
	for (let x = 0; x <= width; x += 30) {
		for (let y = 0; y <= height; y += 30) {
			// circles starting positions depends on mouse position
			const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
			const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
			// also it differs on the particle's location
			const angle = xAngle * (x / width) + yAngle * (y / height);

			// each particle moves in a circle
			const myX = x + 20 * cos(2 * PI * t + angle);
			const myY = y + 20 * sin(2 * PI * t + angle);

			noStroke();
			fill(0);
			ellipse(myX, myY, 10); // draw the particle
			noFill();
			stroke(0);
			ellipse(x, y, 50); // background draw the particle
		}
	}

	t += 0.01; // update time
}
