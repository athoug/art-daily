const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let capture;

function setup() {
	createCanvas(width, height);
	capture = createCapture(VIDEO);
	capture.size(320, 240);
	capture.hide();
	frameRate(10);
}

function draw() {
	// background(255);
	image(capture, random(width), random(height), 320, 240);
	// filter(INVERT);
}

/*
	this comment helped me solve the permission issue in the dom 
	https://stackoverflow.com/questions/59000581/google-chrome-domexception-permission-denied-by-system-for-navigator-mediadevic#:~:text=got%20the%20same%20error%20in%20a%20slightly%20different%20case%20(on%20Windows%2010%2C%20Chrome)%3A%20I%20was%20running%20a%20local%20server%20and%20accessed%20my%20own%20website%20from%20http%3A//127.0.0.1%3A5500/.%20The%20solution%20was%20to%20access%20it%20from%20http%3A//localhost%3A5500/%20instead.

*/
