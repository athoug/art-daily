const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const bugs = [];
const maxBugs = 100;

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();
	fill(255);

	for (let i = 0; i < maxBugs; i++) {
		const bug = new Bug(random(width), random(height), 15);
		bugs.push(bug);
	}
}

function draw() {
	background(150, 0, 0);

	for (let i = 0; i < bugs.length; i++) {
		bugs[i].live();
	}
}
