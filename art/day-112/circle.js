class Circle {
	constructor(angle, c) {
		this.r = 100;
		this.angle = angle;
		this.size = 100;
		this.direction = -1;
		this.c = c;
	}

	update() {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);

		if (this.r < 0 || this.r > 100) {
			this.direction *= -1;
		}

		this.r += this.direction;
	}

	display() {
		fill(this.c);
		ellipse(this.x, this.y, this.size, this.size);
		line(0, 0, this.x, this.y);
	}
}
