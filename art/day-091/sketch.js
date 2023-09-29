const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const bugs = [];
const maxBugs = 150;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	fill(255);

	for (let i = 0; i < maxBugs; i++) {
		const x = width / 2 + sin(i / 2) * i;
		const y = height / 2 + cos(i / 2) * i;

		const bug = new Bug(x, y, 0.05 + i / 1000);
		bugs.push(bug);
	}
}

function draw() {
	background(150, 0, 0);

	for (let i = 0; i < bugs.length; i++) {
		bugs[i].live();
	}
}
