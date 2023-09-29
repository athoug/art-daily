class Bug {
	x;
	y;

	// we'll be using time and speed to make the size and
	// for it to be hypnotic or cyclical we'll use sin
	t; // for time
	speed; // speed in which time moves

	constructor(x, y, speed) {
		this.x = x;
		this.y = y;

		this.t = 0;
		this.speed = speed;
	}

	live() {
		const sz = map(sin(this.t), -1, 1, 10, 20);
		ellipse(this.x, this.y, sz, sz);

		this.t += this.speed;
	}
}
