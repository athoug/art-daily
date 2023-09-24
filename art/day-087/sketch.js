const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let s1;
let s2;
let s3;
let s4;

let amp;
let when = [0, 24, 32];
let volHistory = [];

function preload() {
	soundFormats('mp3', 'ogg');
	s1 = loadSound('./assets/5.mp3');
	s2 = loadSound('./assets/2.mp3');
	s3 = loadSound('./assets/3.mp3');
	s4 = loadSound('./assets/4.mp3');
}
function setup() {
	createCanvas(width, height);
	getAudioContext().resume();

	noFill();
	amp = new p5.Amplitude();
}

function draw() {
	background('#642CA9');

	push();
	let vol = amp.getLevel();
	volHistory.push(vol);

	const currentY = map(vol, 0, 1, height, 0);
	translate(0, height / 2 - currentY);

	if (frameCount % 64 == when[0]) {
		s2.play();
	}
	if (frameCount % 64 == when[2]) {
		s3.play();
	}
	if (frameCount % 64 == when[1]) {
		s1.play();
	}

	if (random(100) > 99) {
		const n = int(random(3));
		when[n] = 8 * int(random(8));
	}

	beginShape();
	stroke('#FF36AB');
	strokeWeight(2);
	for (let i = 0; i < volHistory.length; i++) {
		y = map(volHistory[i], 0, 1, height, 0);
		vertex(i, y);
	}
	endShape();
	pop();

	if (volHistory.length > width - 25) {
		volHistory.splice(0, 1);
	}

	stroke('#BBDEF0');
	strokeWeight(4);
	line(volHistory.length, 0, volHistory.length, height);
}
