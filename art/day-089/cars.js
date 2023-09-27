class Car {
	x;
	y;
	c;

	constructor(x, y, c) {
		this.x = x;
		this.y = y;
		this.c = c;
	}

	drive(speed) {
		this.x += speed;
		fill(this.c);
		rect(this.x, this.y, 40, 100);

		if (this.x > width) {
			this.x = -40;
		}
	}
}
