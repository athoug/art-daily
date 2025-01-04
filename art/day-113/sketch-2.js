const squares = [];
const cols = 15;
const rows = 15;
let rowSize;
let colSize;
const loc = 100;

function setup() {
	createCanvas(400, 400);

	// these work as the spacing how much space to move the starting point of drawing
	rowSize = height / rows;
	colSize = width / cols;

	// this is to fix the center of drawing
	// these work as the margins of teh shape
	const halfRow = rowSize / 2;
	const halfCol = colSize / 2;

	for (let x = 0; x < cols; x++) {
		squares[x] = [];
		for (let y = 0; y < rows; y++) {
			squares[x][y] = new Square(
				halfCol + x * colSize,
				halfRow + y * rowSize,
				halfRow,
				x * loc + y * loc
			);
		}
	}
}

function draw() {
	background(220);

	for (let x = 0; x < cols; x++) {
		for (let y = 0; y < rows; y++) {
			squares[x][y].update();
			squares[x][y].display();
		}
	}
}
