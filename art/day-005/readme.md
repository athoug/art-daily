# Day 005 - Animate Lines Across the Display
today's lesson started with a prompt 
"animate white lines on black background. The lines begin on the left border and end on the right border"

That's a nice challenge. we're given the final outcome and need to build our way to it.

now let's start with the first word `animate` We already know o `draw` is where the animation happens so step 1: set up draw
``` javascript
function draw(){

}
```

The second one is white lines on black background. we learned that the [`stroke`](https://p5js.org/reference/#/p5/stroke) method is what controls the color of the line
and [`background`](https://p5js.org/reference/#/p5/background) is well, for background color. so we can set those two in Step 2

``` javascript
  function draw(){
    background(51);
    stroke(255);
  }
```

the final section of the prompt is "the lines begin on the left border and end on the right border" so we know that a line
is made up of 2 points and each point is made up of a set of (x, y) that point to a specific location on the plane. we
know that the x is the horizontal position where the y is the vertical and since the prompt said right to left, we know that 
the line needs to span horizontally as in `x` so the default canvas size is 100x100 and since it's 0-based we know that the 
beginning is 0 and the last tail end is 99 so the points that need to be set on our line are those x1, and x2 values meaning 
`line(x1, y1, x2, y2)` we want the x's to be constant because they need to span from left to right so
`line(0, y1, 99, y2)` and with taht we achived the prompt. Since we don't really care about what the y values we can just set
them to random. so the final result is 
``` javascript
  function draw(){
    background(51);
    stroke(255);
    line(0, random(100), 99, random(100);
  }
```

and that was all we did in this lesson 
