const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

let boxes = [];

function setup() {
	createCanvas(width, height);
	smooth();
	noStroke();

	for (let i = 0; i < 15; i++) {
		const data = {
			x: random(0.1, 0.9) * width,
			y: random(0.1, 0.9) * height,
			w: random(50, 100),
			h: random(50, 100),
			c: random(255),

			draw() {
				stroke(200);
				fill(this.c);
				rect(this.x, this.y, this.w, this.h);
			},

			isInside() {
				return (
					mouseX > this.x &&
					mouseX < this.x + this.w &&
					mouseY > this.y &&
					mouseY < this.y + this.h
				);
			},

			displace() {
				this.x += mouseX - pmouseX;
				this.y += mouseY - pmouseY;
			},
		};

		boxes.push(data);
	}
}

function draw() {
	background(10);

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].draw();

		if (boxes[i].isInside()) {
			if (mousePressed) {
				cursor('grab');
				boxes[i].displace();
			} else {
				cursor(HAND);
			}
		} else {
			cursor(ARROW);
		}
	}
}

function mousePressed() {
	for (let i = 0; i < boxes.length; i++) {
		if (boxes[i].isInside()) {
		}
	}
}
