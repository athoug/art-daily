const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const grid = [];
const cols = 25;
const rows = 25;

function setup() {
	createCanvas(width, height);
	// frameRate(30);
	const rowSize = width / rows;
	const colSize = height / cols;

	const halfR = rowSize / 2;
	const halfC = colSize / 2;

	for (let x = 0; x < cols; x++) {
		grid[x] = [];
		for (let y = 0; y < rows; y++) {
			grid[x][y] = new Grid(2.5 + x * colSize, 2.5 + y * rowSize);
		}
	}
}

function draw() {
	background(250);

	for (let x = 0; x < cols; x++) {
		for (let y = 0; y < rows; y++) {
			grid[x][y].update();
			grid[x][y].display();
		}
	}
}
