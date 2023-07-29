# Day 029 - Grid
I've noticed in generative art, most sketches span as if they're on a grid, and that's pretty common in code as well, 
think cards and such. Now the way to achieve that effect is by loops and not any loops but nested loops. 
Why nested? because a single loop can achieve something like a row, but if we want columns and rows we need double loops
- the outer loop controls one aspect of the grid (based on hou write it can be the row or column)
- and an inner loop to control the other aspect 

so for brevities sake let's make the example clear 
- outer loop controls the row
- the inner loop controls the column

let's take an example here 

``` javascript
const width = 400;
const height = 400;

let x = 0;
function setup() {
	createCanvas(width, height);
	background(255);
	noStroke();

	while (x < width) {
		let y = 0;
		while (y < height) {
			fill(random(10, 250));
			rect(x, y, 38, 38);
			y += 40;
		}

		x += 40;
	}
}
```

![](https://github.com/athoug/art-daily/blob/main/art/day-029/grid.png)

and with that, we have grids that we can experiment more with. 
