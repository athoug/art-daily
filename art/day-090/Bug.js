class Bug {
	x;
	y;
	s;
	c;

	constructor(x, y, c) {
		this.x = x;
		this.y = y;
		this.c = c;
		this.s = random(5, 20);
	}

	jitter() {
		noStroke();
		fill(this.c);
		const targetX = random(-5, 5);
		const targetY = random(-5, 5);

		this.x = lerp(this.x, targetX, 0.2);
		this.y = lerp(this.y, targetY, 0.2);

		ellipse(this.x, this.y, this.s, this.s);
	}
}
