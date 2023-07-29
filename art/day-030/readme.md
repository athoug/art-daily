# Day 030 - Wave
in the last lesson, we explored the grid (why does that sound like Tron?) anyways that's one of the fundamental techniques of 
generative art I learned. and well the results were really nice and it felt like this is how posters are created and it was 
nice to explore and see. Now enough of me fangirling over how the sketches are getting cooler, let's get moving to the wave.

So we can draw a grid using nested loops, now what if we rotate them? (just as we did in a previous lesson using the custom 
rotating function where we 
- [`translate`](https://p5js.org/reference/#/p5/translate) (move the pivot point)
- [`rotate`](https://p5js.org/reference/#/p5/rotate)
- draw the object
- [`resetMatrix`](https://p5js.org/reference/#/p5/resetMatrix)

``` javascript
function draw_rotating_object(x, y, s, sp) {
	translate(x, y);
	rotate(sp);
	line(0, 0, s, s);
	resetMatrix();
}
```

so far nothing new the new things are 
- margins -> which are the number of pixels we move the objects just so they won't stick to the edges
- spacing -> which is the number of pixels we add between the objects being drawn just to space them out so they won't stick to one another since the values in the loop increase by a small margin
- adding to the rotation -> We add to the rotation value not just a custom value, but also the changes in the loop (the x, and y's)

  ``` javascript
  function draw() {
	background(100, 0, 200);

	let x = 0;
	while (x < 10) {
		let y = 0;
		while (y < 10) {
			draw_rotating_object(
				margins * 1.25 + x * 30,
				margins * 1.25 + y * 30,
				s,
				r + x + y
			);
			y += 1;
		}
		x += 1;
	}

	r += 0.02;
}
  ```
_note_ the variable `margins` is a custom variable I declared at the start of the sketch and gave it the value `50`
  and can I say, the results are brilliant!!!!

![](https://github.com/athoug/art-daily/blob/main/art/day-030/thumbnail.gif)

## Practice
Now I was super inspired today so I did some extra variations such as subbing the [`rect`](https://p5js.org/reference/#/p5/rect) with [`line`](https://p5js.org/reference/#/p5/line) and I'm just at awww
I wish I can control the look of the wave, but I'm still happy with it

![](https://github.com/athoug/art-daily/blob/main/art/day-030/lines.gif)

The next version is well I won't lie, it was based on what another student did [Nasko](https://funprogramming.org/35-A-grid-of-rotating-objects-creates-a-wave-of-rectangles.html#:~:text=1%20%7C%20Reply-,Nasko,-%E2%80%A23%20years)
and his version was cool, it felt like worms and I love it. What I loved about his version is
  - using [`sin`](https://p5js.org/reference/#/p5/sin) and [`cos`](https://p5js.org/reference/#/p5/cos) in the rotation 

![](https://github.com/athoug/art-daily/blob/main/art/day-030/worm.gif)

can I just say, it's been a month! I've been doing this for 30 days straight and in just the last 2 or so days I enjoy what the results
brought, but what's important is that I am enjoying programming again. 🥹
I'm also thinking of streaming this journey...
