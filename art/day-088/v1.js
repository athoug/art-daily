const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let s7;
let s8;
let s9;

let when = [0, 16, 24, 32, 48, 56, 64, 72, 80];

let sz1 = 0;
let targetSz1 = 0;
let sz2 = 0;
let targetSz2 = 0;
let sz3 = 0;
let targetSz3 = 0;
let sz4 = 0;
let targetSz4 = 0;
let sz5 = 0;
let targetSz5 = 0;
let sz6 = 0;
let targetSz6 = 0;
let sz7 = 0;
let targetSz7 = 0;
let sz8 = 0;
let targetSz8 = 0;
let sz9 = 0;
let targetSz9 = 0;

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
}

function setup() {
	createCanvas(width, height);
	// frameRate(1);
}

function draw() {
	background(255);

	if (frameCount % 82 === when[0]) {
		s1.play();
		targetSz1 = 20;
	} else {
		targetSz1 = 0;
	}

	if (frameCount % 82 === when[1]) {
		s2.play();
		targetSz2 = 20;
	} else {
		targetSz2 = 0;
	}

	if (frameCount % 82 === when[2]) {
		s3.play();
		targetSz3 = 20;
	} else {
		targetSz3 = 0;
	}

	if (frameCount % 82 === when[3]) {
		s4.play();
		targetSz4 = 20;
	} else {
		targetSz4 = 0;
	}

	if (frameCount % 82 === when[4]) {
		s5.play();
		targetSz5 = 20;
	} else {
		targetSz5 = 0;
	}

	if (frameCount % 82 === when[5]) {
		s6.play();
		targetSz6 = 20;
	} else {
		targetSz6 = 0;
	}

	if (frameCount % 82 === when[6]) {
		s7.play();
		targetSz7 = 20;
	} else {
		targetSz7 = 0;
	}

	if (frameCount % 82 === when[7]) {
		s8.play();
		targetSz8 = 20;
	} else {
		targetSz8 = 0;
	}

	if (frameCount % 82 === when[8]) {
		s9.play();
		targetSz9 = 20;
	} else {
		targetSz9 = 0;
	}

	sz1 = lerp(sz1, targetSz1, 0.2);
	sz2 = lerp(sz2, targetSz2, 0.2);
	sz3 = lerp(sz3, targetSz3, 0.2);

	sz4 = lerp(sz4, targetSz4, 0.2);
	sz5 = lerp(sz5, targetSz5, 0.2);
	sz6 = lerp(sz6, targetSz6, 0.2);

	sz7 = lerp(sz7, targetSz7, 0.2);
	sz8 = lerp(sz8, targetSz8, 0.2);
	sz9 = lerp(sz9, targetSz9, 0.2);

	ellipse(100, 100, 50 + sz1, 50 + sz1);
	ellipse(200, 100, 50 + sz2, 50 + sz2);
	ellipse(300, 100, 50 + sz3, 50 + sz3);

	ellipse(100, 200, 50 + sz4, 50 + sz4);
	ellipse(200, 200, 50 + sz5, 50 + sz5);
	ellipse(300, 200, 50 + sz6, 50 + sz6);

	ellipse(100, 300, 50 + sz7, 50 + sz7);
	ellipse(200, 300, 50 + sz8, 50 + sz8);
	ellipse(300, 300, 50 + sz9, 50 + sz9);

	if (random(100) > 99) {
		const n = int(random(9));
		when[n] = 8 * int(random(10));
	}
}
