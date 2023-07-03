# Day 004 - Line color & light speed effect
todays lesson was a bit chill. we talked about colors in day 3, but that was in regards to backgound. Now we explore the 
[`stroke`](https://p5js.org/reference/#/p5/stroke) method which changes the color of the line.

So there are different color modes but we'll stick to the RGB one for now. So if we want to draw a red line all we have to do
```
   stroke(255, 0, 0); // RGB
   line(0, 0, 99, 99);
```
and just like that we have a red line right crossing the top left corner (0,0) and down to (99,99). Now that's all cool but what if
we wanted the color to change. and our best bet on that is our buddy `random` lets fixate on having different shades of red 
and to do that we just change the red chanel in the stroek method 
```
   stroke(random(255), 0, 0); // RGB
   line(0, 0, 99, 99);
```

This is nice, now let's add some animation with draw and have the end point change to give a bit of movment 
```
void draw () {
  stroke(random(255), 0, 0); // RGB
  line(50, 50, random(100), random(100));
}
```

The result is quite cool. it would be better got the lines to come out of the center rather than the top left cornder to do that
we know that the canvas is 100x100 so the middle point would be 50,50 and by updating that we get the effect we wanted. Here's 
how the final code looks like.

```
void setup() {
  background(51); // makes the background a shade of black
}

void draw () {
  stroke(random(255), 0, 0); // RGB
  // the screen is 100 pixels wide and 100 pixels tall
  // lines start at the middle of the screen (50, 50)
  line(50, 50, random(100), random(100));
}

```

## Practice
