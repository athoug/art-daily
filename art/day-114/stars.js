class Star {
	constructor(angle, inner) {
		this.r = inner ? 75 : 150;
		this.angle = angle;
	}

	update() {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);
	}

	display() {
		// ellipse(this.x, this.y, 10, 10);
	}
}
