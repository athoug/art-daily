const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const colors = ['#93B5C6', '#DDEDAA', '#F0CF65', '#D7816A', '#BD4F6C'];
const boxes = [];
const boxCount = 9;
const margin = 35;
const s = 20;

function setup() {
	createCanvas(width, height);
	noStroke();
	frameRate(5);

	for (let x = 0; x < boxCount; x++) {
		for (let y = 0; y < boxCount; y++) {
			boxes.push({
				x: margin + x * margin + s,
				y: margin + y * margin + s,
				s,
				c: colors[int(random(colors.length))],
				f: int(random(10)),
			});
		}
	}
}

function draw() {
	background(255);

	for (let i = 0; i < boxes.length; i++) {
		if (frameCount % boxes[i].f == 0) {
			fill(boxes[i].c);
			rect(boxes[i].x, boxes[i].y, boxes[i].s, boxes[i].s);
		}
	}
}
