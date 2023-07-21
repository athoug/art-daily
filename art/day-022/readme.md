# Day 022 - Rotation Pattern
[`rotation`](https://p5js.org/reference/#/p5/rotate) is intresting in processing/p5. the best way to think about it I guess is by thinking of teh canvas as a drawing paper.
Now let's just focus on the [`setup`](https://p5js.org/reference/#/p5/setup) method first to understand the concept. 
now say we draw an ellipse at first as we usually do 

``` javascript
function setup() {
  createCanvas(400, 400);
  background(31);
  noStroke();
  smooth();

  fill(255);
  ellipse(100, 10, 9, 9);
}
```

So that's what we've been doing this whole time. We have an ellipse on the screen 

![](https://github.com/athoug/art-daily/blob/main/art/day-022/cir-1.png)

Now lets draw another ellipse same exact location but with a different fill color

``` javascript
function setup() {
  createCanvas(400, 400);
  background(31);
  noStroke();
  smooth();

  fill(255);
  ellipse(100, 10, 9, 9);

  fill(255, 0, 0);
  ellipse(100, 10, 9, 9);
}
```

now as we predicted (hopfully you predicted with me) that it's drawn over the other ellipse because it's at the same location 
and same size.

![](https://github.com/athoug/art-daily/blob/main/art/day-022/cir-4.png)

now what if we added the [`rotate`](https://p5js.org/reference/#/p5/rotate) method, what would happen? 
``` javascript
function setup() {
  createCanvas(400, 400);
  background(31);
  noStroke();
  smooth();

  fill(255);
  ellipse(100, 10, 9, 9);

  rotate(0.2);
  fill(255, 0, 0);
  ellipse(100, 10, 9, 9);
}
```

now with that line what happenes is thaat the whole canvas is moved or rather rotated from the center (0, 0) a degree of 0.2 
[`radian`](https://p5js.org/reference/#/p5/angleMode) and then the ellipse is drawn so even though they're at the same position (100, 10) the origin is shifted so they
do not overlap.

![](https://github.com/athoug/art-daily/blob/main/art/day-022/cir-2.png)

The thing aout ratation is that it's cumilitive. meaning that if you add to it again, it adds to the previous value. 
let's see that in action.

``` javascript
function setup() {
  createCanvas(400, 400);
  background(31);
  noStroke();
  smooth();
  // roatation is at 0
  fill(255);
  ellipse(100, 10, 9, 9);

  // rotation is now 0.2
  rotate(0.2);
  fill(255, 0, 0);
  ellipse(100, 10, 9, 9);

  // rotation is now 0.4
  rotate(0.2);
  fill(0,255, 0);
  ellipse(100, 10, 9, 9);
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-022/cir-3.png)

With that hopefully the concept of rotation is clear. At times I'm a little confused but remembering this will help. Also if 
we use rotate in [`draw`](https://p5js.org/reference/#/p5/draw) it will reset back to the origin in each frame.

## Practice
so I wanted to have a random color each time the page is loaded for the background and fill color. Also for the circle size and 
when it reaches the end of teh screen it will reset. All was working well but at times the random color generator would reach a 
[`maximum stack and crashes...`](https://stackoverflow.com/questions/6095530/maximum-call-stack-size-exceeded-error) other than that it works fine and I love the results.

![](https://github.com/athoug/art-daily/blob/main/art/day-022/thumbnail.gif)

here's the code

``` javascript
  const width = 400;
const height = 400;

const colors = ['#B8B8D1', '#5B5F97', '#ffc145', '#FFFFFB', '#FF6B6C'];
let r = 0;

let circle_size;
let bg = generateRandom(colors, 0, colors.length - 1);
let circle_color = generateRandom(colors, 0, colors.length - 1, bg);
let x = 10;

function setup() {
	createCanvas(width, height);
	background(colors[bg]);
	smooth();
	noStroke();
}

function draw() {
	fill(colors[circle_color]);
	rotate(r);
	circle_size = random(5, 15);
	circle(x + r, 10, circle_size);
	r += 0.2;
	x = r;
	console.log('r', r);
	console.log('x', x);
	if (x > 250) {
		x = 10;
		r = 0;
		background(colors[bg]);
	}
}

// this function is thanks to Anas Jame
// https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values#:~:text=it%20should%20be%20or%20instead%20of%20and
function generateRandom(list = [], min = 0, max, excluded_num = null) {
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	if (isNaN(num)) {
		generateRandom(min, max);
	}
	return num === excluded_num ? generateRandom(min, max) : num;
}

```

_sidenote:_ sometimes I run into a weird error about using a variable before it's initialized and I'm like how? 
so despite this isn't a bad results, I'm sad that it's error prone...
