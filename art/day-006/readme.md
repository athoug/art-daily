# Day 006 - Horizontal Lines
We build on what we did on day 5 but added an extra lien to the prompt which is "the lines must be horizontal."
so let's break it down one more time.

We know that the canvas is 100x100 so if we want our line to stretch from left to right we need one of our x values 
need to be at the left edge meaning 0 whilst the other x be the right edge of the screen with a value of 99. 
```
  x1 = 0;
  x2 = 99;
```
That's nothing new, we already established that in the previous lesson, but the new bit is the "must be horizontal"
let's splot a couple of lines horizontally to get more data or better yet to gain an understanding.

![](https://d20khd7ddkh5ls.cloudfront.net/horizontal_lines_4_lines.jpg)

so we notice that the x values are as we stated (spanning the screen) but also there's something else, each line has
the same value. so to make a line horizontal we need our line to have the same y values for the points meaning 
```
  line(0, same_y_value, 99, same_y_value);
```

How do we do that? here is where we introduce the concept of **variables**. 
Variables are like containers. think of them as boxes that hold values that we can use for later or change.
so in this case we need it to store the y value we will plot.
*note* that variables have types as in can store numbers (34, -3,..etc) floats (numbers with decimal points 3.5 -3.044 ..etc)
strings (meaning text), and booleans (which are `true` or `false` values)

so the updated code now looks like
``` javascript
// animation
// white lines on black background
// The lines begin on the left border and end on the right border
// The lines must be horizontal.

function draw() {
  background(51);
  stroke(255);
  let y = random(100);
  line(0, y, 99, y);
}
```

And with that, we have a horizontal line.

![](https://github.com/athoug/art-daily/blob/main/art/day-006/day-6.gif)

Side note: I really like how this instructor introduces topics, he's a great teacher. make sure to [check him out](https://funprogramming.org/) 
if you're interested in creative coding 


## Practice
we ended the lesson with a challenge to do the same program but vertically so let's do just that.
Obviously, it was easy since all I had to do is switch from `y` to `x` but I did do a bit of adjustments.
I slowed down the frame rate and made the stroke width change 
``` javascript
function draw() {
	background(255);
	stroke(51);
	strokeWeight(random(10));
	let x = random(width);
	line(x, 0, x, height);
}
```

*note* in my code file I defined width and height variables because I wanted my canvas size to be different.
you don't need a variable for adjusting the size, but I just prefer that for when I decided to change it later
I don't need to update code bits, just the variables.

Here's the result

![](https://github.com/athoug/art-daily/blob/main/art/day-006/thumbnail.gif)

And with that, day 6 is all done ✅

side note, so far all the code is basic, and I understand that, but when can I do cool stuff? I know I shouldn't rush it but
I'm hungry for more complex results...
