# Day 001 - points 

The first lesson is all about the method `point()` and `line()` where we also explored the parameters and how a point takes two (sometimes 3) arguments. A horizontal position as in the x point, and a vertical position as in the y point. `point(x, y)`

```
  point(50, 50); // point in the middle of canvas
  point(0, 99); // point at the bottom left corner of the screen
  point(99,0); // point at the top right corner
```

Now points are all well and nice, but we can also make lines. the line takes on 4 parameters. The first point (which is made of a set of x, y is the position of the first point in the coordinate system), and the second point.

```
  line (0,0,99,99);
```

## Practice 
So now as the lessons are in processing.js, I want to have it on the web so I'm using p5.js and the first thing I did was follow the [get started guide](https://p5js.org/get-started/#sketch) which has a great description of actually getting started so I used that and got an idea of how things work (sketch.js sketch-2.js are the result of following the guide)

Now I read the reference page of the [point method](https://p5js.org/reference/#/p5/point). I liked that I figured out which methods I can use to change the point size `strokeWeight` and so I did random points and sizes as well as slowing down the [frame rate](https://p5js.org/reference/#/p5/frameRate) and got the result of `day-1.js` sketch.

Now I want to improve on this and have. the colors change based on mouse clicks so I'll try that out now. Alright, the first step was getting random colors and there is a brilliant post on [Stackoverflow](https://stackoverflow.com/questions/1484506/random-color-generator) just for that. 
Next, I needed a way to detect mouse presses. I tried the same approach in the guide with the flag `mouseIsPressed` and well that didn't work as expected especially since I messed around with the frame rate, but luckily I found a method called `mousePressed` and after reading [the reference](https://p5js.org/reference/#/p5/mousePressed). Added that to the code and had the background reset along with the stroke color and yay it worked. 
I added a link to the second version of the day and now I'm all done ✅

### Helpful resources
- [p5.js](https://p5js.org/reference/)
- [fun programming](https://funprogramming.org/)
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Random color generator](https://stackoverflow.com/questions/1484506/random-color-generator)
