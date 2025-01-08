class Grid {
	constructor(x, y) {
		this.r = 0;
		this.angle = 0;
		this.size = 15;
		this.x0 = x;
		this.y0 = y;

		this.red = 255;
		this.green = 255;
		this.blue = 255;
	}

	update() {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);

		this.xLocation = this.x0 + this.x;
		this.yLocation = this.y0 + this.y;

		if (
			mouseX > this.xLocation &&
			mouseX < this.xLocation + this.size &&
			mouseY > this.yLocation &&
			mouseY < this.yLocation + this.size
		) {
			this.red = map(mouseX, 0, width, 0, 255);
			this.green = map(mouseY, 0, height, 0, 255);
			this.blue = noise(mouseX * mouseY + frameCount) * 255;
		}
	}

	display() {
		fill(this.red, this.green, this.blue);
		rect(this.x0 + this.x, this.y0 + this.y, this.size, this.size);
	}
}
