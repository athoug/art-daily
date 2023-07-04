# Day 005 - Animate Lines Across the Display
todays lesson started witha prompt 
"animate white lines on black background. The lines begin on the left border and end on the right border"

That's a nice challenge. we're given the final outcome and need to build our way to it.

now let's start by the first word `animate` we already knwo o `draw` is where the aniamtion happenes so step 1: set up draw
``` javascript
function draw(){

}
```

The second one is white lines on black bachround. we leared that teh [`stroke`]() method is what controls the color of the line
and [`background`]() is well, for background color. so we can set those two in step 2

``` javascript
  function draw(){
    background(51);
    stroke(255);
  }
```

the final section of the promot is "the lines begin on the left border and end on the right border" so we know that a line
is made up of 2 points and yeach point is made up of a set of (x, y) that point to a specific location on the plane. we
know that the x is the horizontal postion where are the y is the vertical and since the prompt said right to left, we know that 
the line needs to span horizontaly as in `x` so the default canvas size is 100x100 and since it's 0 based we know that the 
beggining is 0 and last tail end is 99 so the points that need to be set on our line are thoes x1, and x2 values meaning 
`line(x1, y1, x2, y2)` we want the x's to be constant because they nees to span the from left to right so
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
