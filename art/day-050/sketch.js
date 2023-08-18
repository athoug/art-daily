const width = 500;
const height = 600;

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

let y = 150;
const bgColors = ['#A3ACAB', '#F0E6CC', '#C9C3DD'];
const fillColors = ['#212226', '#141511', '#0E3380'];

function writeWord(words) {
	const n = int(random(words.length));
	const s = random(100) > 90 ? BOLD : NORMAL;
	textSize(20, 40);
	textStyle(s);
	text(words[n].toUpperCase(), random(50, 150), y);
	y += 30;
}

function writeSentence() {
	const c = int(random(bgColors.length));

	background(bgColors[c]);
	fill(fillColors[c]);
	y = 150;

	writeWord(art);
	writeWord(adj);
	writeWord(noun);

	writeWord(verb);
	writeWord(pre);

	writeWord(art);
	writeWord(adj);
	writeWord(noun);
}

function setup() {
	createCanvas(width, height);
	writeSentence();
}

function draw() {}

function mousePressed() {
	writeSentence();
}
