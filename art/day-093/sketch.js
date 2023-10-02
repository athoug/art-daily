const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let data;

function preload() {
	data = loadBytes('./assets/1.mp3');
}
function setup() {
	createCanvas(width, height);
	colorMode(HSB);
}

function draw() {
	let filePos = map(mouseX, 0, width, 0, data.bytes.length - width);
	for (let i = 0; i < width; i++) {
		let myHue = data.bytes[i + int(filePos)].toString(8);
		stroke(myHue, 255, 255);
		line(i, 0, i, height);
	}
}
