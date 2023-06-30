function setup() {
	// first step is creating a canvas for our drawings
	createCanvas(400, 400);
	// set the background color
	background(220);
}

/*
This program creates a canvas that is 400 pixels wide and 400 pixels high, and then starts drawing white circles at the position of the mouse. When a mouse button is pressed, the circle color changes to black. Run the code, move the mouse, and click to experience it.
*/

function draw() {
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	// The line you just added draws an ellipse, with its center mouseX pixels over from the left and mouseY pixels down from the top, with a width and height of 80 pixels.
	ellipse(mouseX, mouseY, 80, 80);
}
