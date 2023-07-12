# Day 013 - Bouncing ball
so far, what we have been doing is moving a circle vertically, or horizontally. However, we can move objects in more than those 
4 directions but rather 8. so if we go back to out graph 

![](https://github.com/athoug/art-daily/blob/main/art/day-013/movment.png)

we can see that by changing the values of x and y (by adding or subtracting) we can have diagonal directions. with this knowledge
combined with conditional statments we can move our `ellipse` n different directions. To do that, we need a couble of variables.

to mave our `ellipse` we need to keep track of the `x` and `y` values (so two variables for position) and a value to move the `x`
value and another to move the `y` value. 

``` javascript
let x = 100;
let y = 100;

let move_x = 2;
let move_y = -1;

function draw() {
	background('#424651');

	ellipse(x, y, size, size);
	x += move_x;
	y += move_y;
}
```

great now we have our moving circle. Now to make it bounce, we need to check for the borders. to check we need to make sure that the
position of teh circle is between the border as in `x > 0 and x < width`  same thing with y `y > 0 and y < height` and of it's not 
within the boundry flip the move variable to move in the oposite directions and that would result in this peice of code
``` javascript
if (x > width - center) {
		move_x *= -1;
	}
	if (y > height - center) {
		move_y *= -1;
	}
	if (x < center) {
		move_x *= -1;
	}
	if (y < center) {
		move_y *= -1;
	}
```

and the result is 

![](https://github.com/athoug/art-daily/blob/main/art/day-013/v1.gif)
