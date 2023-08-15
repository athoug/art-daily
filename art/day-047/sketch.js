const width = 600;
const height = 600;
const halfW = width / 2;
const halfH = height / 2;

let chosenQuote;

let angleRotate1 = 0.0;
let lineLength1;

let angleRotate2 = 0.0;
let lineLength2;

let angleRotate3 = 0.0;
let lineLength3;

const quote1 = [
	'The future is uncertain',
	'Time flies over us',
	'The trouble is',
	'Time you enjoy wasting',
	'Time is what we want most',
	'Every moment',
];
const quote2 = [
	' but the end is always near',
	'but leaves its shadow behind',
	'you think you have time',
	'is not wasted time',
	'but what we use worst',
	'is a fresh beginning',
];
const by = [
	'Jim Morrison',
	'Nathaniel Hawthorne',
	'Buddha',
	'Marthe Troly-Curtin',
	'William Penn',
	'T.S. Eliot',
];

function setup() {
	createCanvas(width, height);
	chosenQuote = int(random(quote1.length));
	lineLength1 = quote1[chosenQuote].length * 7;
	lineLength2 = quote2[chosenQuote].length * 9;
	lineLength3 = by[chosenQuote].length * 6;

	console.log(chosenQuote);
	console.log(quote1[chosenQuote], quote1[chosenQuote].length);
	console.log('line length', lineLength1);
}

function draw() {
	background('#EEC939');

	textSize(12);
	textSetter(quote1[chosenQuote], lineLength1, angleRotate1, '#1E2020', 16);
	textSize(24);
	textSetter(quote2[chosenQuote], lineLength2, angleRotate2, '#1E2020', 20);
	textSize(12);
	textSetter(by[chosenQuote], lineLength3, angleRotate3, '#fff', 20);

	angleRotate1 += 0.25;
	angleRotate2 += 0.3;
	angleRotate3 += 0.35;
}

function textSetter(word, lineLength, r, c, margins = 0) {
	stroke(c);
	fill(c);
	strokeWeight(1);
	translate(halfW, halfH);
	rotate(radians(r));
	text(word, margins, 0);
	strokeWeight(2);
	line(0, 0, lineLength + margins, 0);
	resetMatrix();
}
