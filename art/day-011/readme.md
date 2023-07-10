# Day 011 - Things happening sometimes

In today's lesson we get introduced to `print` to help us see what is happening. In other words, debugging. you can see me using it on [day 9](https://github.com/athoug/art-daily/tree/main/art/day-009) it's your friend when your program isn't behaving the way you want it to, or the results aren't as expected. So remember, `print`, `console.log`, or whichever log you use in your preferred programming language is your friend.

Now the lesson builds on yesterday's sketch (now it's 3 days on the same sketch) but this time we wanted to change an event sometimes. hence we chose to use the size. It introduced probability but is very surface-level. In later classes, I believe it will be much expanded but for now, just know when we check a condition the smaller the chances of it occurring is based on how few options you have. Meaning say we generate a number randomly between 0 and 10

```java
  random_num = random(10)
```

so when we couple it with a conditional (as in an [`if`](https://p5js.org/reference/#/p5/if-else) statement or an expression that's translated to a boolean value `true` or `false`) it happens sometimes. And the degree of it happening is in our hands let's take an example of

```java

  if (random_num > 2) {
    print('yaaay, i have been executed');
  }

```

the chances of seeing that print method are hight as in 80%, why? because the possibility of options is high as there is a range of 3-10 possible values that can make this condition pass. So the pool of possibilities is high, now to make it less than 50% we increase the value from 2 to 5

```java

  if (random_num > 5) {
    print('yaaay, i have been executed');
  }

```

so the lower the options the less possibility it might happen.

Now here's the way we used in todays class in regard to the ball size

```java
float show_circle_x = 0;
float fast_circle_x = 0;
float slow_circle_size = 50;

void setup() {
   size(400, 400);
   noStroke();
}

void draw() {
  background(#1bb1f5);
  float slow_circle_size = 50;

  if (random(10) > 9.5) {
    slow_circle_size = 60;
  }

  fill(#c1ff3e);
  ellipse(show_circle_x, 50, slow_circle_size, slow_circle_size);
  show_circle_x += 1;

  fill(#ff4800);
  ellipse(fast_circle_x, 50, 50, 50);
  fast_circle_x += 5;

  if (fast_circle_x > width) {
    fast_circle_x = 0;
  }

  if (show_circle_x > width) {
    show_circle_x = 0;
  }
}
```

Result

![](https://github.com/athoug/art-daily/blob/main/art/day-011/v1.gif)

## Practice
I remember once, one of the tutorials I watched was of [Matt Deslauriers](https://www.mattdesl.com/) and he was so good the things he made were lovely to me. One of the lessons was about margins and having space in your canvas. I remembered that and thought. I want to have a grid of circles with margins and have random circles change sizes just like we did in today's lesson.

So that's the bases of today's sketch practice. I started off with testing how to make a grid. I knew it will be nested loops but for starters, I wanted to have the margins right. I made a loop that runs 7 times (don't ask me why 7) and inside it, I created an object with an `x`, `y`, and a `size` value. I wasn't sure how to populate the positions and account for the margin so I just went with multiplying the index with the margin and well

``` javascript
const circles = [];
const margin = 25;

function setup() {
  createCanvas(width, height);
  background(51);
  noFill();
  stroke(255);
  strokeWeight(2);

  for (let i = 1; i < 8; i++) {
    data = {
      x: i * margin,
      y: i * margin,
      size: 50,
      color: 255,
    };
    circles.push(data);
  }
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, circles[i].size, circles[i].size);
  }
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-1.png)

so I realized the problem here is that I can't test this in a single loop, I need the nested loop for the `y` value to be accurate. I did that and just made it run once to get a feel of what I'm doing 

``` javascript
for (let j = 1; j < 2; j++) {
    for (let i = 1; i < 8; i++) {
      data = {
        x: i * margin,
        y: j * margin,
        size: 50,
        color: 255,
      };
      circles.push(data);
    }
  }
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-2.png)

okay, at least they're all on the same row. So now I just need to figure out the spacing. Sadly  don't remember Matt's lesson well but I remember there is a margin and addition or subtraction not sure so to be honest, I started randomly making up equations, and here's the trial and error that was happening

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-3.png)

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-4.png)

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-5.png)

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-6.png)

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-7.png)

and as you can see we finally have a grid. My final messing around resulted in this loop 

``` javascript
 for (let j = 1; j < 6; j++) {
    for (let i = 1; i < 7; i++) {
      data = {
        x: i * 70 + margin / 3,
        y: j * 70 + margin,
        size: 50,
        color: 255,
      };
      circles.push(data);
    }
  }
}
```

Now it's time to make the randomness with size. I did it as today's lesson a 50% chance of it happening 

``` javascript
for (let i = 0; i < circles.length; i++) {
		size = circles[i].size;
		if (random(10) > 5) {
			size = circles[i].size - 10;
		}
		ellipse(circles[i].x, circles[i].y, size, size);
	}
}
```

yeah...

![](https://github.com/athoug/art-daily/blob/main/art/day-011/attempt-8.gif)

This is not good. I think it's just too fast that the effect I want to have isn't registering so I resulted in slowing the frame rate and got something similar to what I had in mind (mind you I am seeing a pattern that what I have in mind isn't what gets turned out in the end)

![](https://github.com/athoug/art-daily/blob/main/art/day-011/thumbnail.gif)

