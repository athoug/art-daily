const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;
const emoji = [];
const cols = 17;
const rows = 17;
const loc = 100;
const faces = ['😂', '😳', '😴', '😬', '😛', '😆'];

function setup() {
	createCanvas(width, height);

	const colSize = width / cols;
	const rowSize = height / rows;

	for (let i = 0; i < cols; i++) {
		emoji[i] = [];
		for (let j = 0; j < rows; j++) {
			emoji[i][j] = new Emoji(
				'😊',
				2 + i * colSize,
				2 + j * rowSize,
				0,
				// i * loc + j * loc
				0
			);
		}
	}

	frameRate(10);
}

function draw() {
	background(0);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			emoji[i][j].update(faces[Math.floor(Math.random() * faces.length)]);
			emoji[i][j].display();
		}
	}
}
