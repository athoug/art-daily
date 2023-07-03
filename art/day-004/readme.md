# Day 004 - Line color & light speed effect
today's lesson was a bit chill. we talked about colors on day 3, but that was in regard to the background. Now we explore the 
[`stroke`](https://p5js.org/reference/#/p5/stroke) method which changes the color of the line.

So there are different color modes but we'll stick to the RGB one for now. So if we want to draw a red line all we have to do
```
   stroke(255, 0, 0); // RGB
   line(0, 0, 99, 99);
```
and just like that, we have a red line right crossing the top left corner (0,0) and down to (99,99). Now that's all cool but what if
we wanted the color to change? and our best bet on that is our buddy `random` let's fixate on having different shades of red 
and to do that we just change the red channel in the stroke method 
```
   stroke(random(255), 0, 0); // RGB
   line(0, 0, 99, 99);
```

This is nice, now let's add some animation with `draw` and have the endpoint change to give a bit of movement 
```
void draw () {
  stroke(random(255), 0, 0); // RGB
  line(50, 50, random(100), random(100));
}
```

The result is quite cool. it would be better to get the lines to come out of the center rather than the top left corner to do that
we know that the canvas is 100x100 so the middle point would be 50,50 and by updating that we get the effect we wanted. Here's 
what the final code looks like.

```
void setup() {
  background(51); // makes the background a shade of black
}

void draw () {
  stroke(random(255), 0, 0); // RGB
  //The screen is 100 pixels wide and 100 pixels tall
  // lines start at the middle of the screen (50, 50)
  line(50, 50, random(100), random(100));
}

```

![](https://github.com/athoug/art-daily/blob/main/art/day-004/v-1.gif)



## Practice
okay, so this practice had a lot of nice accidents. let me back up a bit, I wanted to do this sketch where 
the user can draw their own "modern art" by plotting points on the canvas and having the line be a random color
and a random size. 

so at the top of my head, I thought that the methods that I think can help me achieve these were 
- [`isMousedPressed`](https://p5js.org/reference/#/p5/mouseIsPressed)
- [`mouseX`](https://p5js.org/reference/#/p5/mouseX) (also `mouseY`)
- and [`mousePressed`](https://p5js.org/reference/#/p5/mousePressed)

I started off by thinking that I need to check in `draw` when a mouse is clicked. and once it's clicked, I want the method
`mousePressed` to record the location of the click (both the x and y)
```
function draw() {
	stroke(r, g, b);
	if (mouseIsPressed === true) {
		if (x1 !== null && y1 !== null) {
			line(x1, y1, mouseX, mouseY);
		}
	}
}

function mousePressed() {
	if (x1 === null && y1 === null) {
		x1 = mouseX;
		y1 = mouseY;
	}
}

```
it didn't necessarily turn into what I wanted but I still saved it because it was a nice result which turned into v4.
*note* versions 1 and 2 are part of the tutorial I did so they don't really count.

![](https://github.com/athoug/art-daily/blob/main/art/day-004/v-3.gif)

So now I realized that I wanted to grab the location of the movement of the mouse to give the user a feel like they are drawing
so I did that and well still not what I was planning but this one was super neat which turned into v4

![](https://github.com/athoug/art-daily/blob/main/art/day-004/v4.gif)

okay so I fixed it by adding a conditional for the draw and now it does give the illusion that we are drawing the line just as I wanted, so off to the right track.

![](https://github.com/athoug/art-daily/blob/main/art/day-004/mistake-1.gif)

okay now let's actually have the lines working as in plotting where I mark them. so I added the conditionals and updated the points and reset them but shoot, it's not saving the last line it drew it keeps erasing them... 

![](https://github.com/athoug/art-daily/blob/main/art/day-004/mistake-2.gif)

so how can I save the line, and also have the background update to show that we are drawing the line? 
array objects came to the rescue! 
so I did an object the moment all values are captured, pushed it into an array, and have the draw method draw the lines only if it's populated and baam, it worked!

![](https://github.com/athoug/art-daily/blob/main/art/day-004/working.gif)

okay so here's how the final code looks like

```
const width = 400;
const height = 400;
let r;
let g;
let b;

let x1;
let y1;
let x2;
let y2;

let lines;
let thickness;

function setup() {
	createCanvas(width, height);
	background(230);
	r = random(255);
	g = random(255);
	b = random(255);
	thickness = random(15);

	x1 = null;
	y1 = null;
	x2 = null;
	y2 = null;

	lines = [];
}

function draw() {
	if (mouseIsPressed === true) {
		if (x1 !== null && y1 !== null && x2 !== null && y2 !== null) {
			data = {
				x1,
				y1,
				x2,
				y2,
				r,
				g,
				b,
				thickness,
			};
			lines.push(data);

			// reset the values
			x1 = null;
			y1 = null;
			x2 = null;
			y2 = null;
			r = random(255);
			g = random(255);
			b = random(255);
			thickness = random(15);
		}
	} else {
		if (x1 !== null && y1 !== null && x2 === null && y2 === null) {
			background(230);
			stroke(r, g, b);
			strokeWeight(thickness);
			line(x1, y1, mouseX, mouseY);
		}
	}

	if (lines.length > 0) {
		for (let i = 0; i < lines.length; i++) {
			stroke(lines[i].r, lines[i].g, lines[i].b);
			strokeWeight(lines[i].thickness);
			line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
		}
	}
}

function mousePressed() {
	if (x1 === null && y1 === null) {
		x1 = mouseX;
		y1 = mouseY;
	} else if (x1 !== null && y1 !== null && x2 === null && y2 === null) {
		x2 = mouseX;
		y2 = mouseY;
	}
}


```

and here's how the final result looks like

![](https://github.com/athoug/art-daily/blob/main/art/day-004/thumbnail.gif)

and with that, day 4 is all done ✅

