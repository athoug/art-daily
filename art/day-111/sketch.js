const grid = [];
const cols = 15;
const rows = 15;
const loc = 100;

function setup() {
	createCanvas(400, 400);
	// we need some grid spacing
	const rowSize = height / rows;
	const colSize = width / cols;

	const halfCol = colSize / 2;
	const halfRow = rowSize / 2;

	// populating the grid with the cell object
	for (let i = 0; i < cols; i++) {
		grid[i] = [];
		for (let j = 0; j < rows; j++) {
			grid[i][j] = new Cell(
				halfCol + i * colSize,
				halfRow + j * rowSize,
				halfRow,
				i * loc + j * loc
			);
		}
	}
}

function draw() {
	background(250);

	// we also need another loop to display and update them
	// populating the grid with the cell object
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].update();
			grid[i][j].display();
		}
	}
}
