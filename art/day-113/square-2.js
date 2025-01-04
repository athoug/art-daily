class Square {
	constructor(x, y, r, angle) {
		this.r = 0;
		this.angle = 0;
		this.size = 20;
		this.x0 = x;
		this.y0 = y;
		this.mX = 1;
	}

	update() {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);

		this.angle += 0.007;
	}

	display() {
		rectMode(CENTER);
		// noStroke();
		fill('#e3e4db');
		push();
		translate(this.x0 + this.x, this.y0 + this.y);
		if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
			this.mX = map(mouseX, 1, width, 1, 20);
		}
		rotate(this.angle * this.mX);
		rect(0, 0, this.size, this.size);
		pop();
	}
}
