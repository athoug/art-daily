# Day 015 - Thangs happening sometimes II
we've explored the topic of things happening some times in a previous day. Today though, we'll dig a bit deeper 
(not that deep) with the chances of something happening. 
one way we can add chance in codig is through teh use of a `random` method. we can controll that random by adjusting 
the chances of something happening. to understand what I mean let's take an example.

The example will be teh chances of getting a random number between 0 - 100
now we have 101 possible values (the 1 is because 0 is a value as well) now to make something
happenes sometimes we nend to include a condition and the chances of that happening is based on the possible values 
what do I mean by that? 

![](https://github.com/athoug/art-daily/blob/main/art/day-015/probability.png)

Say we have thin number line here. What are the chances of getting values larger than 50? since we have 101 possible values 
and by limmiting the results to values greater than 50. then we will have 49 (I'm going very specific with the numbers) 
possible values 51, 52, 53, ...ect till a 100. so that means we almost have half teh values. so chances we get the condition 
to pass is 50%. this is similar to the [coin toss chances](https://www.math-only-math.com/coin-toss-probability.html)

so the less the possible values the lesser the chances of happening. That's a general explanation of probability. Obviously 
you'll get a better explanantion here [for readers](https://www.pas.rochester.edu/~stte/phy104-F00/notes-2.html#:~:text=When%20we%20flip%20a%20coin,1%2F6%20of%20the%20time.) 
or [for visual persons](https://www.youtube.com/watch?v=KzfWUEJjG18&ab_channel=mathantics)

So now, to the fun stuff which is code! 
using the idea of probability we make a barcode looking sketch where we change the color of the line sometimes (30% chance of happening)
and then have another random choise of the line color to be white or black (50% chance)

``` javascript
const width = 400;
const height = 400;
let x = 0;

const halfHight = height / 2;

function setup() {
	createCanvas(width, height);
	background(255);
	stroke(31);
}

function changeColors() {
	stroke('#FABC2A');
	line(x, halfHight, x, halfHight - 100);
	// deciding which color to change it to
	if (random(100) > 50) {
		stroke(255);
	} else {
		stroke(31);
	}
}

function draw() {
	line(x, halfHight, x, halfHight - 100);

	// deciding to change the color
	if (random(100) > 70) {
		changeColors();
	}

	x += 1;
	if (x > width) {
		x = 0;
	}
}

```

**Result**

![](https://github.com/athoug/art-daily/blob/main/art/day-015/v2.gif)

*Side note*: we also had a quick intro to functions. which are a block of code we write to make our instructions run (usually we 
have code thats redundent ina function to lessen the code and make it re-usable) we didn't dig deeper with return values and such
but a start to a more modular code structure

and with that we completed two weeks! `so happy this streak is going~ 🥹
