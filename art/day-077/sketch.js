const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let extraCanvas;
let time;
let today;
let a = 0;
let strokeColor = '#F5CB5C';

const startDate = new Date('06/30/2023');
const todaysDate = new Date();
const difference = todaysDate.getTime() - startDate.getTime(); // time in milliseconds
const sketchDays = Math.ceil(difference / (1000 * 3600 * 24)); // convert time to days using ((1000 milliseconds * (60 seconds * 60 minutes) * 24 hours))
console.log(sketchDays);

function setup() {
	createCanvas(width, height);
	frameRate(1);
	extraCanvas = createGraphics(width, height);
	extraCanvas.frameRate(60);
	extraCanvas.clear(); // this makes the canvas transparent
}

function draw() {
	background(255);
	noStroke();
	fill('#F5CB5C');
	rect(halfW + 50, 95, 90, 30);

	//  wave
	let x = 0;

	if (random(100) > 95) {
		if (random(100) > 50) {
			strokeColor = '#F5CB5C';
		} else {
			strokeColor = '#fff';
		}
	}
	while (x < width) {
		extraCanvas.stroke(strokeColor);
		extraCanvas.point(x, height * noise(x / 100, a));

		x += 1;
	}
	a += 0.02;

	image(extraCanvas, 0, 0);

	noStroke();
	fill('#242423');
	textSize(24);
	text('I have been doing', halfW - 150, halfH - 100);
	text('creative coding for ' + sketchDays + ' days', halfW - 150, halfH - 80);

	textSize(14);
	text("but you don't care so here's a clock", halfW - 150, halfH - 60);

	today = 'Today is ' + day() + '.' + month() + '.' + year();
	text(today, halfW - 70, halfH + 30);

	textSize(42);
	time = nf(hour(), 2) + ':' + nf(minute(), 2) + ':' + nf(second(), 2);
	text(time, halfW - 90, halfH + 70);
}
