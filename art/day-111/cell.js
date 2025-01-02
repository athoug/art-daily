class Cell {
	constructor(x0, y0, r, angle) {
		this.r = r;
		this.angle = angle;
		this.size = 5;
		this.x0 = x0;
		this.y0 = y0;
	}

	update(angle = null) {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);
		if (angle) {
			this.r = angle;
		}
		this.angle += 0.02;
	}

	display(c = 0) {
		// ellipse(this.x0, this.y0, this.r*2, this.r*2)
		// line(this.x0, this.y0, this.x0+this.x, this.y0+this.y);
		fill(c);
		noStroke();
		ellipse(this.x0 + this.x, this.y0 + this.y, this.size, this.size);
	}
}
