const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const cars = [];
const maxCars = 10;

function setup() {
	createCanvas(width, height);
	noStroke();
	smooth();

	for (let i = 0; i < maxCars; i++) {
		const car = new Car(
			i * 100,
			i * 100,
			color(random(255), random(255)),
			random(255)
		);
		cars.push(car);
	}
}

function draw() {
	background(255);

	for (let i = 0; i < cars.length; i++) {
		cars[i].drive(i + 1);
	}
}
