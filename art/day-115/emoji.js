class Emoji {
	constructor(text, x, y, r, angle) {
		this.r = r;
		this.angle = angle;
		this.size = 20;
		this.text = text;
		this.x0 = x;
		this.y0 = y;
	}

	update(text) {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);
		if (text) {
			this.text = text;
		}
	}

	display() {
		textAlign(LEFT, TOP);
		textSize(this.size);
		// text('🌈', 0, 0);
		text(this.text, this.x0 + this.x, this.y0 + this.y);
	}
}
