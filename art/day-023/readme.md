# Day 023 - Translate
So we know 2 things that are facts at this moment. 
1. that when we add a value to the x position it moves to the right
2. the point of origin is at the top left corner at (0, 0);

when we experimented with rotation the previous day, we saw that it works as if we have a needle placed in the top left corner, and each time we [`rotate`](https://p5js.org/reference/#/p5/rotate), it moves the canvas from that point in a clockwise direction. So we can think of it as a pivot point
the place where change takes place. 

Now what if we want to move that point? As in not have it at point (0, 0) but maybe half the screen? We can actually do that 
with the [`translate`](https://p5js.org/reference/#/p5/translate) method

I made this visual that hopefully explains it better than I would (as the saying goes, a picture is worth a thousand words. let's
see if that holds)
_note_ the code is using `processing.js` 

![](https://github.com/athoug/art-daily/blob/main/art/day-023/translate.png)

now for today's lesson, all we did is just change the pivot point and we got this 

![](https://github.com/athoug/art-daily/blob/main/art/day-023/result.gif)

## Practice 
so I wanted to have the circles have different colors, and also when we reach the end of the screen (or close enough) to that the 
image reset and also change the rotation degree to get different patterns. I actually like the result. 

![](https://github.com/athoug/art-daily/blob/main/art/day-023/thumbnail.gif)
