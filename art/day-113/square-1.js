class Square {
	constructor(x, y, r, angle) {
		this.r = r;
		this.angle = angle;
		this.size = 20;
		this.x0 = x;
		this.y0 = y;
	}

	update() {
		this.x = this.r * cos(this.angle);
		this.y = this.r * sin(this.angle);

		this.angle += 0.05;
	}

	display() {
		rectMode(CENTER);
		noStroke();
		fill('#e3e4db');
		push();
		translate(this.x0 + this.x, this.y0 + this.y);
		rect(0, 0, this.size, this.size);
		pop();
	}
}
