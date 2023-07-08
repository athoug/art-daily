# Day 009 - Animated circle
Now we reached a point where we need a bit order in our life (or is it sketch) anyways this lesson is all about moving a circle from 
left to right, not in random locations which what we were doing this whole time.
to do that let's think back to what our `ellipse` method is made of

The [`ellipse`](https://p5js.org/reference/#/p5/ellipse) takes 4 arguments 
- x -> the position of the ellipse on fromt the left to the screen of the center of the ellispde
- y -> the position of the ellipse from the top of the screen to the center of the ellispde
- width -> how wide the ellipse is
- height -> how all the ellispde is

*Note* if both width and hight have teh same value then we get a circle 

so given that we want to move the circle from left to right we can deduice that the 3 values (`y`, `width` and `height`) won't
change so the only thing we want to change is teh `x` value. Yes, we want to change it but we don't want to change it randomly.
so we need a variable to hold the current position of the circle from the left. And to move it, we need to increment the position 
each tiem the draw function is run. we what we get is 

``` javascript
const width = 400;
const height = 400;
let x = 50;

function setup() {
	createCanvas(width, height);
	noFill();
	stroke('#FF8000');
	strokeWeight(3);
}

function draw() {
	background('#051346');
	ellipse(x, 200, 50, 50);
	x += 1;

	if (x > width + 50) {
		x = 0;
	}
}
```
*note* I jumped ahead and reset teh position when it's off screen and part of me thinks it will be tomorrows lesson but oh well.

![](https://github.com/athoug/art-daily/blob/main/art/day-009/v1.gif)

## Practice 
Now I wanted to do some circles across the screen (from top to bottom) moving at varying speeds so I did an array of objects 
that holds the x and y position, and just looped over it to draw the circles.

![](https://github.com/athoug/art-daily/blob/main/art/day-009/attempt-1.gif)

But they're too close to one another, I didn't give them some breathing space. So I updated the y postion for each and well I 
got this

![](https://github.com/athoug/art-daily/blob/main/art/day-009/attempt-2.gif)

which is not bad. I can stop here, but I wanted them to have different speeds so I added a speed property to the object and...

![](https://github.com/athoug/art-daily/blob/main/art/day-009/attempt-3.gif)

Damn, the speed values are too high. so I adjusted them to slower speed values and 

![](https://github.com/athoug/art-daily/blob/main/art/day-009/thumbnail.gif)

That's acceptable. It wasn't what I had in mind, but close. I'll experament some more, but I don't think 
I'll write a post about it, you can just check the code file (if it exists because I'm still not sure if I'll do it)

But with that, day 9 is done ✅
we're moving to double diggits!
