const width = 400;
const height = 400;
const sizeX = width / 2;
const sizeY = height / 2;
const centerX = width / 2;
const centerY = height / 2;

const firstIncrement = 50;
const secondIncrement = 35;

let i = 0;
let z = 0;
let iIsReverse = false;
let zIsReverse = false;

function setup() {
	createCanvas(width, height);
	background(51);
	noFill();
	stroke(255);
	frameRate(20);
}

function draw() {
	background(51);
	if (i <= firstIncrement) {
		ellipse(centerX - i, centerY, sizeX, sizeY);
		ellipse(centerX, centerY - i, sizeX, sizeY);
		ellipse(centerX + i, centerY, sizeX, sizeY);
		ellipse(centerX, centerY + i, sizeX, sizeY);

		if (!iIsReverse) {
			i++;
		} else {
			i--;
		}

		if (i === firstIncrement) {
			iIsReverse = true;
		}

		if (i === 0) {
			iIsReverse = false;
		}
	}

	if (z <= secondIncrement) {
		ellipse(centerX - z, centerY - z, sizeX, sizeY);
		ellipse(centerX - z, centerY + z, sizeX, sizeY);
		ellipse(centerX + z, centerY - z, sizeX, sizeY);
		ellipse(centerX + z, centerY + z, sizeX, sizeY);

		if (!zIsReverse) {
			z++;
		} else {
			z--;
		}

		if (z === secondIncrement) {
			zIsReverse = true;
		}

		if (z === 0) {
			zIsReverse = false;
		}
	}
}
