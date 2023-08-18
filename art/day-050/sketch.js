const width = 500;
const height = 600;
const halfW = width / 2;

let extraCanvas;

const noun = [
	'Bumblebee',
	'Lollipop',
	'Unicorn',
	'Giggle',
	'Bubble',
	'Rainbow',
	'Gigglesnort',
	'Whimsy',
	'Snuggle',
	'Fluffernutter',
	'Tickle',
	'Marshmallow',
	'Twinkle',
	'Jamboree',
	'Popsicle',
	'Chatterbox',
	'Doodle',
	'Zephyr',
	'Wobble',
	'Tiddlywinks',
];

const adj = [
	'Bumbling',
	'Quirky',
	'Zany',
	'Wacky',
	'Whimsical',
	'Goofy',
	'Hilarious',
	'Bizarre',
	'Fluffy',
	'Absurd',
	'Silly',
	'Chuckle-worthy',
	'Ridiculous',
	'Playful',
	'Nonsensical',
	'Giggly',
	'Quizzical',
	'Kooky',
	'Mirthful',
	'Quip-filled',
];

const verb = [
	'Frolic',
	'Jiggle',
	'Bounce',
	'Gallop',
	'Tiptoe',
	'Scurry',
	'Chuckle',
	'Skip',
	'Zing',
	'Wobble',
	'Tickle',
	'Pounce',
	'Whirl',
	'Snicker',
	'Gobble',
	'Waddle',
	'Hoot',
	'Giggle',
	'Bumble',
	'Jitterbug',
];

const art = [
	'the',
	'my',
	'your',
	'our',
	'that',
	'this',
	'every',
	'one',
	'the only',
	'his',
	'her',
];

const pre = [
	'under',
	'in front of',
	'above',
	'behind',
	'near',
	'following',
	'inside',
	'besides',
	'unlike',
	'like',
	'beneath',
	'against',
	'into',
	'beyond',
	'considering',
	'without',
	'with',
	'towards',
];

const rects = [
	{
		x: 50,
		y: 60,
		w: 30,
		h: 400,
		speed: 1,
	},
	{
		x: 100,
		y: 40,
		w: 55,
		h: 250,
		speed: 1.2,
	},
	{
		x: 170,
		y: 70,
		w: 30,
		h: 150,
		speed: 2,
	},
	{
		x: 220,
		y: 65,
		w: 30,
		h: 250,
		speed: 0.21,
	},
	{
		x: 270,
		y: 55,
		w: 50,
		h: 500,
		speed: 0.41,
	},
	{
		x: 340,
		y: 100,
		w: 30,
		h: 270,
		speed: 0.9,
	},
	{
		x: 390,
		y: 90,
		w: 50,
		h: 270,
		speed: 1.3,
	},
];

let y = 150;
const bgColors = ['#A3ACAB', '#F0E6CC', '#C9C3DD'];
const fillColors = ['#212226', '#141511', '#0E3380'];
const fillColorsRect = [
	'rgba(33, 34, 38, 0.7)',
	'rgba(21, 22, 18, 0.7)',
	'rgba(14, 51, 128, 0.7)',
];
let bgAnimate;
let c;
let a = 0;
let wave = 0;
let flip = 1;
let rectNoise = 0;

function writeWord(words, ctx) {
	const n = int(random(words.length));
	const s = random(100) > 90 ? BOLD : NORMAL;
	ctx.textSize(20, 40);
	ctx.textStyle(s);
	ctx.text(words[n].toUpperCase(), random(50, 150), y);
	y += 30;
}

function writeSentence(ctx) {
	c = int(random(bgColors.length));

	ctx.clear(); // ctx.background(bgColors[c]);
	ctx.fill(fillColors[c]);
	y = 150;

	writeWord(art, ctx);
	writeWord(adj, ctx);
	writeWord(noun, ctx);

	writeWord(verb, ctx);
	writeWord(pre, ctx);

	writeWord(art, ctx);
	writeWord(adj, ctx);
	writeWord(noun, ctx);
}

function drawRects() {
	rectMode(CORNER);
	noStroke();
	fill(fillColorsRect[c]);
	background(bgColors[c]);

	for (let i = 0; i < rects.length; i++) {
		rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
	}

	for (let i = 0; i < rects.length; i++) {
		if (rects[i].y + rects[i].h >= height - 50) {
			flip *= -1;
		}

		if (rects[i].y < 50) {
			flip *= -1;
		}

		rects[i].y += sin(a) + rects[i].speed * flip;
	}
}

function drawWave() {
	if (random(100) > 60) {
		stroke(bgColors[c]);
	} else {
		stroke(fillColorsRect[c]);
	}

	console.log(fillColorsRect[c]);
	strokeWeight(random(1, 4));
	for (let y = 0; y < height; y++) {
		const x = halfW * noise(wave * 1.3) + 250;
		point(x, y);

		wave += 0.01;
	}
}

function justDrawSomeRects() {
	background(bgColors[c]);
	rectMode(CENTER);
	const mx = mouseX;
	const my = mouseY;
	noFill();

	stroke(fillColorsRect[c]);

	let rw = 100;
	let rh = 100;

	for (let i = 0; i < 8; i++) {
		strokeWeight(20 * noise((rectNoise * i) / 1.7));
		rect(mx, my, rw, rh);
		rw += 50;
		rh += 100;

		rectNoise += 0.05;
	}
}

function setup() {
	createCanvas(width, height);
	extraCanvas = createGraphics(width, height);
	extraCanvas.clear(); // this makes the extra canvas transparent

	// bgAnimate = int(random(100));
	bgAnimate = 90;
	writeSentence(extraCanvas);
	decideFrameRate();
}

function draw() {
	if (bgAnimate < 40) {
		drawRects();
	} else if (bgAnimate > 40 && bgAnimate < 80) {
		drawWave();
	} else {
		justDrawSomeRects();
	}

	// to see the extra canvas
	image(extraCanvas, 0, 0);

	a += 0.02;
}

function mousePressed() {
	writeSentence(extraCanvas);
	decideFrameRate();
}

function decideFrameRate() {
	bgAnimate = int(random(100));

	if (bgAnimate > 40 && bgAnimate < 80) {
		background(bgColors[c]);
		frameRate(10);
	} else {
		frameRate(60);
	}
}
