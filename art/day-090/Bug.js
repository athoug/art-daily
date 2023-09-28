class Bug {
	x;
	y;
	s;
	c;

	constructor(x, y, c) {
		this.x = x;
		this.y = y;
		this.c = c;
		this.s = random(5, 30);
	}

	jitter() {
		noStroke();
		fill(this.c);
		const targetX = random(-2, 2);
		const targetY = random(-2, 2);

		this.x += targetX;
		this.y += targetY;

		console.log(targetX, targetY);

		ellipse(this.x, this.y, this.s, this.s);
	}
}
