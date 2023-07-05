# Day 006 - Horizontal Lines
We build on what we did on day 5 but added an extra lien to the prompt which is "the lines must be horizontal."
so let's break it down one more time.

We know that the canvas is 100x100 so if we want our line to streach from left to right we need one of our x values 
need to be at the left edge meaning 0 whilst the other x be the right edge of teh screen with a value of 99. 
```
  x1 = 0;
  x2 = 99;
```
That's nothing new, we already established that in the previous lesson, but the new bit is the "must be horizontal"
let' splot a couple of lines horizontally to get more data or better yet to gain an understanding.

![](https://d20khd7ddkh5ls.cloudfront.net/horizontal_lines_4_lines.jpg)

so we notice that the x values are as we stated (spaning the screen) but also there's something else, each line has
the same value. so to make a line horizontal we need for our line to have same y values for the points meaning 
```
  line(0, same_y_value, 99, same_y_value);
```

How do we do that? here is where we introduce the concept of **variables**. 
Variales are like containers. think of them as boxes that hold values that we can use for later or change.
so in this case we need it to store the y value we will plot.
*note* that variables have types as in in can store numbers (34, -3,..etc) floats (numbers with decimal points 3.5 -3.044 ..etc)
strings (meaning text), and booleans (which are `true` or `false` values)

so the updated code now looks like
``` javascript
  // animation
  // white lines on black background
  // the lines begin on the left border and end on the right border
  // the lines must be horizontal.

function draw() {
  background(51);
  stroke(255);
  let y = random(100);
  line(0, y, 99, y);
}
```

And with that we have a horizontal line.
Side note: I really liek how this instructor introduces topics, he's a great teacher. make sure to [check him out](https://funprogramming.org/) 
if you're intresetd in creative coding 


## Practice
we ended the lesson with a challenge to do the same program but vertically so lets do just that.
