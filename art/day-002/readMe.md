# Day 2 - Cartesian plane, lines, and loops
So in today's lesson, we went over the Cartesian coordinate system. This helped one conceptualize how pixels are drawn on the screen and how we start off at the top left corner with x being 0 and y 0 as well (0,0) then as we move horizontally to the right, the x value increases, and as we move down the screen the y value increases. 

![image of Cartesian plane](http://www.e-cartouche.ch/content_reg/cartouche/graphics/en/image/coordinates.jpg)
So all in all every pixel on the screen can be plotted by having the x and y value of its location on the plane. 
Now that makes us understand better what the arguments we passed to `point` are. As well as understand why we passed 4 values 
to `line` since a line is made of 2 points and each point is made of 2 values, hence the 4 values.

### lines and random
now it's all fun creating a line such that 
```
  line(0,0, 99, 99);
```
but what if we want it to be drawn at random positions? Well luckily there's a method that helps in just that [`random()`](https://p5js.org/reference/#/p5/random)
with `random` added to the code 

```
  line(random(100),random(100),random(100),random(100)); 
```
it made it a bit more interesting, but what if we wanted it to change position from time to time? That's where we can use loops

### draw function 
in animation, the way they animate the characters movement, is by having different frames of the character (with changing 
position and movement) played after one another, that gives us the illusion of moments when in reality they are images
the same concept is adopted here.

Processing comes with a method called [`draw`](https://p5js.org/reference/#/p5/draw) which loops over the code inside it over and 
over again. so if we add our code inside of a draw function then 
```
  function draw() {
  // draw() loops forever, until stopped
  line(random(100),random(100),random(100),random(100)); 
  }
```
we'll have a bunch of lines drawn over and over again until our whole canvas turns black. so we need a way to have the canvas reset

### background
with the [`background`]() method we can reset the canvas (as well as choose a background color) so when we add a background to our 
`draw` function we get this illusion that the line is moving. 
```
  function draw() {
    // draw() loops forever, until stopped
    // background() erases the screen with a color
    background(255, 204, 0);
    line(random(100),random(100),random(100),random(100)); 
  }
```

This was the summary of today's lesson. Now it's time for me to put that in practice.

## Practice
