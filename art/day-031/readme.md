# Day 031 - Noise
So far the way we've been generating random numbers was through the method [`random`](https://processing.org/reference/random_.html) but it has a problem. which is... it's too
random (ironic I know). However in real life, numbers don't jump as random as this, it's more subtle, and that's what [`noise`](https://processing.org/reference/noise_.html)
was made. the difference between the two is 
- random take on two parameters a `min` and `max` value
- noise takes on one parameter which is the degree of randomness

  I'm still not that clear about the noise method but it's called [`Perlin noise`](https://en.wikipedia.org/wiki/Perlin_noise#:~:text=Perlin%20noise%20is%20a%20type,the%20creation%20of%20image%20textures.) and it stays consistent throughout the program
  running. so in order to get another value you need to increase by a small degree between `0.05 - 0.01`

   So let's take an example to show how random and noise differ
  ``` javascript
    // random
    console.log(random(1)); // 0.5817067486632206
    console.log(random(1)); // 0.9480913480216095

    // noise
    console.log(noise(1)); // 0.36866527595701604
    console.log(noise(1.01)); // 0.368231981687674
  ```

  as you can see random jumps drastically whereas noise is more subtle and that works better with animation,
  size changes and rotations.

  So to use it in code as we did in this log example, we need to increase the noise value little by little so we need a variable
  to update for it to animate and that's what we do here

  ``` javascript
  const width = 400;
const height = 400;

let xOff = 0;
let yOff = 0;

function setup() {
	createCanvas(width, height);
	stroke(21);
	strokeWeight(3);
	noFill();
}

function draw() {
	background(255);

	let x = noise(xOff) * width;
	line(x, 0, x, height);

	let y = noise(yOff) * height;
	line(0, y, width, y);

	ellipse(x, y, 20);

	xOff += 0.01;
	yOff += 0.02;
} ```

and the result animation is smoother than all the previous example we did before 

![](https://github.com/athoug/art-daily/blob/main/art/day-031/noise-test.gif)

## Practice
To be honest, I still haven't grasped the concept well but I followed [another example in the docs](https://processing.org/reference/noise_.html#:~:text=Copy-,float%20noiseScale%20%3D,-0.02%3B%0A%0Avoid) that used a loop and `mouseX` 
and `mouseY` which gave an interesting result that resembles a wave 

![](https://github.com/athoug/art-daily/blob/main/art/day-031/thumbnail.gif)
