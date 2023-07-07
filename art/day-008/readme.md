# Day 008 - Circles and Rectangles
And now we're expanding and learning more primitive shapes! Let's recap first. For the past 7 days, we've dug into `point()` and
`line()` we've explored various ways to use them and understood that the most basic thing in geometry is a point and that a
the line is two points connected.

Today we learn two new primitive shapes! `ellipse` and `rect`

## Ellipses
so an [`ellipse`](https://p5js.org/reference/#/p5/ellipse) is an oval shape and the function draws it by taking in 4 parameters.
x, and y which are center points in which we'll draw the ellipse. And the other two parameters are width and height. If we give
it the same width and height it would result in a circle shape. So let's just see the code shall we,

```java
  //Resize the display to make it larger
  size(400, 400);
  //We drew our circle (it's a circle because the width and height are the same)
  ellipse(200, 200, 150, 150);
```

## Rect
Now [`rect`](https://p5js.org/reference/#/p5/rect) is similar to `ellipse` in that it too takes 4 parameters and them being
the same, but it differs in the mode of the drawing. What do I mean by that? Well, the ellipse's drawing mode is `CENTER` where 
as rect draws from the top left corner. We can change it however to be centered using the [`rectMode`](https://p5js.org/reference/#/p5/rectMode) 
method. Let's see it in action

```java
//Resize the display to make it larger
size(400, 400);
// we tell the program that the x, and y values in rect mean center not top-left
rectMode(CENTER);
//We draw the rectangle
rect(200, 200, 150, 150);
```

Now we also explored a couple of new methods such as
- [`fill`](https://p5js.org/reference/#/p5/fill) which colors the shapes
- [`stroke`](https://p5js.org/reference/#/p5/stroke) which sets the color of the stroke
- [`noStroke`](https://p5js.org/reference/#/p5/noStroke) which removes the stroke

Finally, we explored different color values. We were accustomed to using the RGB colors, but here we saw a use case of using 
hexadecimal colors. 
The sketch looks a bit like this,
``` java
  //We know these drawing functions
  // poitns() and line()
  
  //Resize the display to make it larger
  size(400, 400);
  //We changed the color of our background
  background(45, 4, 75);
  
  // we tell the program that the x, and y values in rect mean center not top-left
  rectMode(CENTER);
  //We removed the line/stroke from the shape
  noStroke();
  //We used RGB to set the color
  fill(87, 27, 131);
  //We draw the rectangle
  rect(200, 200, 150, 150);
  fill(#A479C4); //Here we are using hexadecimal code for the color  
  //We drew our circle (it's a circle because the width and height are the same)
  ellipse(200, 200, 150, 150);
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/day-8-result.png)

## Peactice
So as I am ecstatic that we're moving forward with new drawing functions, I'd like to try to do this sort of image

![](https://www.miskatonic.org/images/20141219-circles-r-12.png)
The source is [this article](https://www.miskatonic.org/2014/12/19/intersecting-circles/)

okay so my first attempt was drawing a circle on the screen 
```javascript
const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  background(51);

  noFill();
  stroke(255);
  ellipse(width / 2, height / 2, width / 2, height / 2);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-1.png)

Now the easy part is done, I start to draw two circles and also set some variables along the way. Now I know that they'll have
the same position horizontally but I need to move the circle down a bit hence the `+50`
``` javascript
function setup() {
  createCanvas(width, height);
  background(51);

  size_x = width / 2;
  size_y = height / 2;
  noFill();
  stroke(255);
  ellipse(width / 2, height / 2, size_x, size_y);
  ellipse(width / 2 + 50, height / 2 + 50, size_x, size_y);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-2.png)

so this is good, but it doesn't feel centered anymore meaning I need to move the original circle up a bit. I also noticed that
I'm dividing constantly so that too moved into a variable 
``` javascript
function setup() {
  createCanvas(width, height);
  background(51);

  size_x = width / 2;
  size_y = height / 2;

  center_x = width / 2;
  center_y = height / 2;
  noFill();
  stroke(255);
  ellipse(center_x, center_y - 50, size_x, size_y);
  ellipse(center_x + 50, center_x, size_x, size_y);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-3.png)

okay much better! now let's do the right and left versions as well
``` javascript
function setup() {
  createCanvas(width, height);
  background(51);

  size_x = width / 2;
  size_y = height / 2;

  center_x = width / 2;
  center_y = height / 2;
  noFill();
  stroke(255);
  ellipse(center_x - 50, center_y, size_x, size_y);
  ellipse(center_x, center_y - 50, size_x, size_y);
  ellipse(center_x + 50, center_x, size_x, size_y);
  ellipse(center_x, center_y + 50, size_x, size_y);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-4.png)

Yay! half way through. Now the tricky bit. I'm not sure how to draw the rest as in based on what will I move them? 
I just thought okay, it's time to add to both sides not just one so 
``` javascript
function setup() {
  createCanvas(width, height);
  background(51);

  const size_x = width / 2;
  const size_y = height / 2;
  const center_x = width / 2;
  const center_y = height / 2;

  noFill();
  stroke(255);
  ellipse(center_x - 50, center_y, size_x, size_y);
  ellipse(center_x, center_y - 50, size_x, size_y);
  ellipse(center_x + 50, center_x, size_x, size_y);
  ellipse(center_x, center_y + 50, size_x, size_y);

  ellipse(center_x - 50, center_y + 50, size_x, size_y);
  ellipse(center_x + 50, center_y - 50, size_x, size_y);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-5.png)

Ummm I don't know... maybe I should just add another two to make them 4 and see how that turns out before judging
``` javascript
  function setup() {
  createCanvas(width, height);
  background(51);

  const size_x = width / 2;
  const size_y = height / 2;
  const center_x = width / 2;
  const center_y = height / 2;

  noFill();
  stroke(255);
  ellipse(center_x - 50, center_y, size_x, size_y);
  ellipse(center_x, center_y - 50, size_x, size_y);
  ellipse(center_x + 50, center_x, size_x, size_y);
  ellipse(center_x, center_y + 50, size_x, size_y);

  ellipse(center_x - 50, center_y - 50, size_x, size_y);
  ellipse(center_x + 50, center_y + 50, size_x, size_y);
  ellipse(center_x - 75, center_y - 75, size_x, size_y);
  ellipse(center_x + 75, center_y + 75, size_x, size_y);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-6.png)

Okay, no. Clearly, the measurements for the second round of circles are wrong. I think I should lower the change value 
on the second draw from 50 to say 25 or 35 (I'll play around with them)
``` javascript
const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  background(51);

  const size_x = width / 2;
  const size_y = height / 2;
  const center_x = width / 2;
  const center_y = height / 2;

  noFill();
  stroke(255);
  ellipse(center_x - 50, center_y, size_x, size_y);
  ellipse(center_x, center_y - 50, size_x, size_y);
  ellipse(center_x + 50, center_x, size_x, size_y);
  ellipse(center_x, center_y + 50, size_x, size_y);

  ellipse(center_x - 35, center_y - 35, size_x, size_y);
  ellipse(center_x - 35, center_y + 35, size_x, size_y);
  ellipse(center_x + 35, center_y - 35, size_x, size_y);
  ellipse(center_x + 35, center_y + 35, size_x, size_y);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-008/attempt-7.png)

YES! That's what I wanted. Mind you this should be much better with a loop but hey I 
was experimenting not thinking clean. Anyways, I want to see if this can be animated? 
