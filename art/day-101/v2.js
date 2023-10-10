const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const letters = [
	'W',
	'E',
	'L',
	'C',
	'O',
	'M',
	'E',
	'T',
	'O',
	'T',
	'H',
	'I',
	'S',
	'M',
	'A',
	'D',
	'W',
	'O',
	'R',
	'L',
	'D',
];
let which = 0;
function setup() {
	createCanvas(width, height);
	stroke(255);
	fill(255);
	textSize(81);
	background(0);
}

function draw() {
	if (mouseIsPressed) {
		if (keyIsPressed) {
			fill(0);
		} else {
			fill(255);
		}
		text(letters[which], mouseX - 30, mouseY + 40);
		which = int((which + 1) % letters.length);
	}

	filter(BLUR, 3);
	filter(THRESHOLD);
}
