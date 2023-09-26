const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

const circles = [];
let sounds = [];
const maxCircles = 9;
const colors = [
	'#D6F6DD',
	'#DAC4F7',
	'#F4989C',
	'#F0B67F',
	'#ACECF7',
	'#FFEE93',
	'#94ECBE',
	'#DBCBD8',
	'#A2D6F9',
];
let keys = ['r', 't', 'y', 'f', 'g', 'h', 'v', 'b', 'n'];

let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let s7;
let s8;
let s9;

function preload() {
	s1 = loadSound('./assets/bubbles.mp3');
	s2 = loadSound('./assets/clay.mp3');
	s3 = loadSound('./assets/confetti.mp3');
	s4 = loadSound('./assets/flash-2.mp3');
	s5 = loadSound('./assets/pinwheel.mp3');
	s6 = loadSound('./assets/piston-2.mp3');
	s7 = loadSound('./assets/prism-1.mp3');
	s8 = loadSound('./assets/strike.mp3');
	s9 = loadSound('./assets/ufo.mp3');

	sounds = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
}

function setup() {
	createCanvas(width, height);
	noStroke();
	smooth();

	// set up the circles
	let amt = 1;
	let yInc = 100;

	for (let i = 1; i <= maxCircles; i++) {
		circles.push({
			x: amt * 100,
			y: yInc,
			s: 50,
			sz: 0,
			ts: 0,
			c: colors[i - 1],
			sound: sounds[i - 1],
		});

		if (i % 3 == 0) {
			amt = 1;
			yInc += 100;
		} else {
			amt += 1;
		}
	}
}

function draw() {
	background(255);

	for (let i = 0; i < circles.length; i++) {
		circles[i].sz = lerp(circles[i].sz, circles[i].ts, 0.2);
		fill(circles[i].c);
		ellipse(
			circles[i].x,
			circles[i].y,
			circles[i].s + circles[i].sz,
			circles[i].s + circles[i].sz
		);

		fill(150);
		text(keys[i], circles[i].x - 3, circles[i].y + 5);
	}

	if (keyIsPressed) {
		checkKey();
	} else {
		for (let i = 0; i < circles.length; i++) {
			circles[i].ts = 0;
		}
	}
}

function checkKey() {
	const theKey = key.toLowerCase();
	if (keys.includes(theKey)) {
		const i = keys.indexOf(theKey);
		circles[i].ts = 20;
		circles[i].sound.play();
	}
}
