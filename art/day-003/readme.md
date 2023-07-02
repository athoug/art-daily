# Day 3 - Shades of color and FrameRates
Last we stopped was when we discussed the `draw` method and having our line be drawn in different locations
based on the `random` method and to make it look like it's moving we added the `background` method where it acts
as if we have a blank piece of paper and started drawing again. It todays lesson we'll continue exploring 
the `background` method


## Background
so when we look at the docs of the [background](https://p5js.org/reference/#/p5/background) we see that ther eare different ways
to use it. we can use it with a single argument 
```
  background(51)
```
we can use it with 3 arguments
```
  background(255, 204, 0);
```
and a couple of other ways as well but what are those arguments? well they are to specify the color. To learn more about it
we can check out the [`color`](https://p5js.org/reference/#/p5/color) method that goes a bit deeper with the differnt versions

but what we need to know is that there are 2 types of colors 
**additive:**
you start with black and the more light you add the brighter it gets
the most basic example is RGB which stands for red green blue. 
0 - 255 there are 256 possible values

**subtractive**
you start with white and the more ink you add the darker it gets
it's what printers use and teh most basic example is CMYK 
which stands for cayan magenta yellow black 

[colorMode](https://p5js.org/reference/#/p5/colorMode) in the docs might explain it better

![color modes](https://cdn1.slideserve.com/2139710/additive-and-subtractive-color-n.jpg)

so let's try to use that in our code by getting a random color 

```
  background(random(256), random(256), random(256));
```

## FrameRate and Setup
Now let's try to get teh colors to be animated. From the last lesson we learned that the method that does the looping is 
`draw` so lets add that and see what we get 
```
  function draw() {
    background(random(256), random(256), random(256));
  }
```
So the program works fine however, it's too fast. Lets see if there is a way we can slow the frawing down. and when we check 
the docs, we can see that there is a method called [`frameRate`](https://p5js.org/reference/#/p5/frameRate) the controls 
how many frames are drawn per second. However it says something about a setup. 
And when we chack the description of [`setup`](https://p5js.org/reference/#/p5/setup) in the docs we realize that it's a method
that runs once at the start of the program so all the setup and adjustments that we want to run once are added there.
Now the updated program looks like this
```
  // setup() is called once at the start of the program
function setup() {
  // framerate() tells processing how many times per second
  // it should execute draw()
  frameRate(1);
}

function draw() {
    background(random(256), random(256), random(256));
  }
```

And that was the end of lesson. Now it's just time for me to put that in practice. Also I noticed my practices makes
me jump in lessons. I already did the `random`, `setup` and `frameRates` since day 1 😅 oh well...

## Practice
