const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const outer = [];
const outerCount = 12;
const deltaO = 0.01;

const inner = [];
const innerCount = 3;
const deltaI = 0.05;

function setup() {
	createCanvas(width, height);

	for (let i = 0; i < outerCount; i++) {
		const angle = (TWO_PI / outerCount) * i;
		outer[i] = new Star(angle);
	}

	for (let i = 0; i < innerCount; i++) {
		const angle = (TWO_PI / innerCount) * i;
		inner[i] = new Star(angle, true);
	}
}

function draw() {
	background(250);

	translate(halfW, halfH);

	for (let i = 0; i < outerCount; i++) {
		outer[i].angle += deltaO;
		outer[i].update();
		outer[i].display();
	}

	for (let i = 0; i < innerCount; i++) {
		inner[i].angle += deltaI;
		inner[i].update();
		inner[i].display();
	}

	for (let i = 0; i < outerCount; i++) {
		for (let j = 0; j < innerCount; j++) {
			line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
		}
	}
}
