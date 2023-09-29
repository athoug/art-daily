class Bug {
	x;
	y;
	sz;

	maxsz;
	minsz;
	grow;

	constructor(x, y, sz) {
		this.x = x;
		this.y = y;
		this.sz = sz;

		this.maxsz = 20;
		this.minsz = 10;
		this.grow = random(0.2, 0.8);
	}

	live() {
		ellipse(this.x, this.y, this.sz, this.sz);

		this.sz += this.grow;

		if (this.sz > this.maxsz) {
			this.sz = this.maxsz;
			this.grow *= -1;
		}

		if (this.sz < this.minsz) {
			this.sz = this.minsz;
			this.grow *= -1;
		}
	}
}
