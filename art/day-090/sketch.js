const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const bugs = [];
function setup() {
	createCanvas(width, height);
	smooth();
}

function draw() {
	background(255, 30);

	for (let i = 0; i < bugs.length; i++) {
		bugs[i].jitter();
	}
}

function mouseClicked() {
	const bug = new Bug(
		mouseX,
		mouseY,
		color(random(255), random(255), random(255))
	);
	bugs.push(bug);
	return false;
}
