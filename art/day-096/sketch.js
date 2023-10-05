const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let vid;

function setup() {
	noCanvas();
	vid = createVideo('./assets/movie.mov', loadVideo);

	vid.size(450, 750);
}

function loadVideo() {
	vid.loop();
	vid.volume(1);
}
